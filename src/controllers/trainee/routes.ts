import { Router } from 'express';

import TraineeController from './controller';
import { validationHandler } from '../../libs/validationHandler';
import validation from './validation';
import { authMiddleWare } from '../../libs/routes';
const traineeRouter =  Router();
traineeRouter.route('/')
            .get ( authMiddleWare('getUsers', 'read'), validationHandler(validation.get), TraineeController.get )
            .post ( authMiddleWare('getUsers', 'write'), validationHandler(validation.create), TraineeController.create )
            .put ( authMiddleWare('getUsers', 'write'), validationHandler(validation.update), TraineeController.update );
            traineeRouter.delete ('/:id', authMiddleWare('getUsers', 'Delete'), validationHandler(validation.delete), TraineeController.delete );

export default traineeRouter;