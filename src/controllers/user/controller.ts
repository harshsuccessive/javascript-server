import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import IUserModel from '../../repositories/user/IUserModel'
import UserRepository from '../../repositories/user/UserRepository';
import { config } from '../../config';
import IRequest from '../../libs/IRequest';

class UserController {

    public get(req: Request, res: Response, next: NextFunction) {

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
// To create a new user

public create(req: IRequest, res: Response, next: NextFunction) {
  const { id, email, name, role, password } = req.body;
  const creator = req.userData._id;
  const user = new UserRepository();
  try {
    const result = user.createUser({id, email, name, role, password }, creator);
    console.log(req.body);
    res.send({
      status: 'ok',
      message: 'User Created Successfully!',
      result: {
        'id': id,
        'name': name,
        'email': email,
        'role': role,
        'password': password
      },
    });
  }
  catch (err) {
    console.log(err);
    res.send({
      error: 'Value is not given properly',
      code: 500
    });
  }
}

// To update the existing user data

public update(req: IRequest, res: Response, next: NextFunction) {
  const { id, dataToUpdate } = req.body;
  console.log('id', id);
  console.log('dataToUpdate', dataToUpdate);
  const updator = req.userData._id;
  const user = new UserRepository();
  try {
    const result = user.updateUser( id, dataToUpdate, updator);
    res.send({
      status: 'ok',
      message: 'User Updated Successfully',
      data: result,

    });
  }
  catch (err) {
    res.send({
      error: 'User not found for update',
      code: 404
    });
  }
}

// To delete the existing User

public delete(req: IRequest, res: Response, next: NextFunction) {
  const  id  = req.params.id;
  const remover = req.userData._id;
  const user = new UserRepository();
  try {
     user.deleteData(id, remover);
     res.send({
       status: 'ok',
       message: 'User Deleted successfully',
      });
    }
    catch (err) {
      res.send({
        message: 'User not found to be deleted',
        code: 404
      });
    }
  }

  // To fetch the authorization token

  public login(req: IRequest, res: Response, next: NextFunction) {
  const { email } = req.body;
  const user = new UserRepository();
  try {
    const userData =  user.getUser({ email });
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
      status: 'ok',
      message: 'Authorization Token',
      'token': token
    });
    return;
    }
    catch (err) {
      res.send({
        error: 'User Not login',
        code: 404
      });
    }
  }

  // To fetch the current user

  public me(req: IRequest, res: Response, next: NextFunction) {
  const id = req.query;
  const user = new UserRepository();
  try {
    const data = user.getUser( id );
    res.status(200).send({
      status: 'ok',
      message: 'Me',
      'data':  data ,
    });
  } catch (err) {
    console.log(err);
    res.send({
      error: 'User fetched not successfully',
      code: 500
    });
  }
}
}

export default new UserController();