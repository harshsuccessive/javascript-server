import UserController from './Controller';
import { Router } from  'express';
import { validationHandler } from '../../libs/validationHandler';
import validation from './validation';
import { authMiddleWare } from '../../libs/routes/authMiddleWare';
import { permissions, user } from '../../libs/constant';

const UserRouter = Router();

UserRouter.get('/get', authMiddleWare('getUsers', 'read'), validationHandler(validation.get),
    UserController.get);

UserRouter.post('/create', authMiddleWare('getUsers', 'read'), validationHandler(validation.create),
    UserController.create);
UserRouter.put('/update', authMiddleWare('getUsers', 'read'), validationHandler(validation.update),
    UserController.update);
UserRouter.delete('/id', authMiddleWare('getUser1', 'Delete'), validationHandler(validation.delete),
    UserController.delete);
UserRouter.post('/login', validationHandler(validation.login), UserController.login);
UserRouter.get('/me', authMiddleWare('getUsers', 'read'), UserController.me);



export default UserRouter;