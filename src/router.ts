import { Router } from 'express';
import { traineeRouter } from './controllers';
import { UserRouter } from './controllers/user';
const mainRouter = Router();

mainRouter.use('/trainee', traineeRouter);
mainRouter.use('/user', UserRouter)

export default mainRouter;