import { Router } from 'express';

import TraineeController from './controller';

const traineeRouter =  Router();

traineeRouter.route('/')
    .get(TraineeController.get)
    .post(TraineeController.create)
    .put(TraineeController.update)
    .delete(TraineeController.Delete);

export default traineeRouter;

