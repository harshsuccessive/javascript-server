import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

import UserRepository from '../../repositories/user/UserRepository';
import { config } from '../../config';
import IRequest from '../../libs/IRequest';

class UserController {
  public  get(req: Request, res: Response, next: NextFunction) {

    const user = new UserRepository();
    const { id } = req.query;

     user.getUser({ id })
        .then((data) => {
            if (data === null) {
                throw undefined;
            }

            res.status(200).send({
                message: 'User Fetched successfully',

                data,

                code: 200
            });

        })
        .catch(err => {
            console.log(err);
            res.send({
                error: 'User not found',
                code: 500
            });
        });

}
public  me(req: IRequest, res: Response, next: NextFunction) {
    const id = req.query;
    const user = new UserRepository();
    try {
    const data = user.getUser( id );

    res.status(200).send({
        status: 'ok',
        message: 'Me',
        'data': data ,
        });
    } catch (err) {
        console.log(err);
        res.send({
        error: 'User fetched not successfully',
        code: 500
        });
    }
}

    public create(req: IRequest, res: Response, next: NextFunction) {
        const { id, email, name, role, password } = req.body;
        const creator = req.userData._id;

        const user = new UserRepository();
        user.createUser({id, email, name, role, password }, creator)
            .then(() => {
                console.log(req.body);
                res.send({
                    message: 'User Created Successfully!',
                    data: {
                        'id': id,
                        'name': name,
                        'email': email,
                        'role': role,
                        'password': password
                    },
                    code: 200
                });
            });
    }

    public update(req: IRequest, res: Response, next: NextFunction) {
        const { id, dataToUpdate } = req.body;
        console.log('id', id);
        console.log('dataToUpdate', dataToUpdate);
        const updator = req.userData._id;
        const user = new UserRepository();
        user.updateUser( id, dataToUpdate, updator)
        .then((result) => {
            res.send({
                data: result,
                message: 'User Updated',
                code: 200
            });
        })
        .catch ((err) => {
            res.send({
                error: 'User Not Found for update',
                code: 404
            });
        });
    }

    public delete(req: IRequest, res: Response, next: NextFunction) {
        const  id  = req.params.id;
        const remover = req.userData._id;
        const user = new UserRepository();
        user.deleteData(id, remover)
        .then((result) => {
            res.send({
                message: 'Deleted successfully',
                code: 200
            });
        })
        .catch ((err) => {
            res.send({
                message: 'User not found to be deleted',
                code: 404
            });
        });
    }

    public login(req: IRequest, res: Response, next: NextFunction) {
        const { email } = req.body;

        const user = new UserRepository();

        user.getUser({ email })
            .then((userData) => {
                if (userData === null) {
                    res.status(404).send({
                        err: 'User Not Found',
                        code: 404
                    });
                    return;
                }

                const { password } = userData;

                if (password !== req.body.password) {
                    res.status(401).send({
                        err: 'Invalid Password',
                        code: 401
                    });
                    return;
                }

                const token = jwt.sign(userData.toJSON(), config.KEY);
                res.send({
                    message: 'Login Successfull',
                    status: 200,
                    'token': token
                });
                return;

            });
    }

}

export default new UserController();