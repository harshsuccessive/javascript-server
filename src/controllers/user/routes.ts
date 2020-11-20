import { Router } from 'express';
import UserController from './Controller';
import { validationHandler } from '../../libs/validationHandler';
import validation from './validation';
import { authMiddleWare } from '../../libs/routes/authMiddleware';

const UserRouter = Router();
UserRouter.route('/')
.get( authMiddleWare('getUsers', 'read'), validationHandler(validation.get), UserController.get);

export default UserRouter;