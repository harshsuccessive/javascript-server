import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import * as bcrypt from 'bcrypt';
import UserRepository from '../../repositories/user/UserRepository';
import configuration from '../../config/configuration';
import IRequest from '../../libs/IRequest';

class UserController {

async get(req: IRequest, res: Response, next: NextFunction) {
    try {
        console.log('Inside get method of User Controller');

        const userRepository = new UserRepository();
        const searchField = req.query.srch;
        const user = new UserRepository();
        if(searchField){
        user.find({
            '$or': [
                {name: {$regex: searchField, $options: '$i' } },
                {email: {$regex: searchField, $options: '$i'} }
            ]
        })

        .then ( data => {
            res.send(data);
        })

        .catch ((err) => {
            res.send({
                message: 'no results',
                code: 404
            });
        });
    }
        const sort = {};
        sort[`${req.query.sortedBy}`] = req.query.sortedOrder;
        console.log(sort);
        const extractedData = await userRepository.getAll(req.body).sort(sort).skip(Number(req.query.skip)).limit(Number(req.query.limit));
        res.status(200).send({
            message: 'trainee fetched successfully',
            totalCount: await userRepository.count(req.body),
            count: extractedData.length,
            data: [extractedData],
            status: 'success',
        });
    }
    catch (err) {
        console.log('Inside err', err);
    }
}

public async me(req: IRequest, res: Response, next: NextFunction) {
    const id = req.query;
    const user = new UserRepository();
    try {
    const data = await user.getUser( id );

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
    public async create(req: IRequest, res: Response, next: NextFunction) {
        const { id, email, name, role, password } = req.body;
        console.log(req.userData);
        const creator = req.userData._id;

        const user = new UserRepository();
        await user.createUser({id, email, name, role, password }, creator)
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

    public async update(req: IRequest, res: Response, next: NextFunction) {
        const { id, dataToUpdate } = req.body;
        console.log('id', id);
        console.log('dataToUpdate', dataToUpdate);
        const updator = req.userData._id;
        const user = new UserRepository();
        await user.updateUser( id, dataToUpdate, updator)
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

    public async delete(req: IRequest, res: Response, next: NextFunction) {
        const  id  = req.query.id;
        const remover = req.userData._id;
        const user = new UserRepository();
        await user.deleteData(id, remover)
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

    public async login(req: IRequest, res: Response, next: NextFunction) {
        const { email } = req.body;
        console.log('Inside User Controller login');
        const user = new UserRepository();

        await user.getUser({ email })
            .then((userData) => {
                if (userData === null) {
                    res.status(404).send({
                        err: 'User Not Found',
                        code: 404
                    });
                    return;
                }

                const { password } = userData;

                if (!bcrypt.compareSync(req.body.password, password)) {
                    res.status(401).send({
                        err: 'Invalid Password',
                        code: 401
                    });
                    return;
                }

                const token = jwt.sign( userData.toJSON(), configuration.KEY, {
                expiresIn: Math.floor(Date.now() / 1000) + ( 15 * 60), } );
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