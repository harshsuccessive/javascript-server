import { Router } from 'express';
import UserController from './Controller';
import { validationHandler } from '../../libs/validationHandler';
import Validation from './validation';
import { authMiddleWare } from '../../libs/routes/authMiddleware';

const UserRouter = Router();
UserRouter.route('/')
.get( authMiddleWare('getUsers', 'read'), validationHandler(Validation.get), UserController.get);

export default UserRouter; 
