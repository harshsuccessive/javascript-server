import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import UserRepository from '../.././repositories/user/UserRepository';
import config from '../../config/configuration';

class UserController {
    static instance: UserController;
    static getInstance() {
        if ( UserController.instance ) {
            return UserController.instance;
        }
        UserController.instance = new UserController();
        return UserController.instance;
    }

get( req: Request, res: Response, next: NextFunction ) {
    try {
       console.log( 'Inside GET method of User controller ' );

        res.send({
        message: 'User fetchd successfully',
        data: [
            {
                name: 'User1',
                address: 'noida'
            }
                ]
        });
    } catch (err) {
        console.log( 'Inside Error', err );
        }
    }
create( req: Request, res: Response, next: NextFunction ) {
    try {
        console.log( 'Inside POST method of User controller ' );

        res.send({
            message: 'User created successfully',
            data: {
                name: 'User1',
                address: 'noida'
            }
        });
    } catch (err) {
            console.log( 'Inside Error', err );
        }
    }
update( req: Request, res: Response, next: NextFunction ) {
    try {
        console.log( 'Inside Update method of User controller ' );

        res.send({
            message: 'User updated successfully',
            data: {
                name: 'User1',
                address: 'noida'
            }
        });
    } catch (err) {
            console.log( 'Inside Error', err );
        }
    }   
delete( req: Request, res: Response, next: NextFunction ) {
    try {
            console.log( 'Inside delete method of User controller ' );

            res.send({
                message: 'User deleted successfully',
                data: {
                    name: 'User1',
                    address: 'noida'
                }
            });
        } catch (err) {
            console.log( 'Inside Error', err );
        }
    }
}

export default UserController.getInstance(); 