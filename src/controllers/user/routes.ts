import { Router } from 'express';
import UserController from './controller';
import { validationHandler } from '../../libs/validationHandler';
import validation from './validation';
import { authMiddleWare}  from '../../libs/routes/authMiddleware';

const UserRouter = Router();
UserRouter.post('/create', authMiddleWare('getUsers1', 'write'), validationHandler(validation.create), UserController.create);
UserRouter.post('/login', validationHandler(validation.login), UserController.login);
UserRouter.get('/me', authMiddleWare('getUsers', 'read'), validationHandler(validation.get), UserController.me);
// userRoute.get('/getall', authMiddleWare('getUsers', 'read'), validationHandler(validation.get), UserController.getAll);

UserRouter.put('/update', authMiddleWare('getUsers', 'write'), validationHandler(validation.update), UserController.update);
UserRouter.delete('/remove/:id', authMiddleWare('getUsers', 'delete'), validationHandler(validation.delete), UserController.remove);


export default UserRouter;