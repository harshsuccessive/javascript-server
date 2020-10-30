import { Router } from 'express';

import TraineeController from './controller';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
const traineeRouter =  Router();
traineeRouter.route('/')
            .get( validationHandler(validation.get), TraineeController.get )
            .post(validationHandler(validation.create), TraineeController.create)
            .put(validationHandler(validation.update), TraineeController.update)
            .delete(validationHandler(validation.delete), TraineeController.Delete);

export default traineeRouter;

  