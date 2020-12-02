// import { Router } from 'express';

// import TraineeController from './controller';
// import { validationHandler } from '../../libs/validationHandler';
// import validation from './validation';
// import  { authMiddleWare }  from '../../libs/routes/authMiddleWare';
// const traineeRouter =  Router();
// traineeRouter.route('/')
//             .get ( authMiddleWare('getUsers', 'read'), validationHandler(validation.get), TraineeController.get )
//             .post ( authMiddleWare('getUsers', 'write'), validationHandler(validation.create), TraineeController.create )
//             .put ( authMiddleWare('getUsers', 'write'), validationHandler(validation.update), TraineeController.update );
//             traineeRouter.delete ('/:id', authMiddleWare('getUsers', 'Delete'), validationHandler(validation.delete), TraineeController.delete );

// export default traineeRouter;

import { Router } from 'express';
import { authMiddleWare } from '../../libs/routes/authMiddleWare';
import TraineeController from './controller';
import { validationHandler } from '../../libs/validationHandler';
import validation from './validation';
const traineeRouter = Router();
/**
 * @swagger
 *
 *  definitions:
 *      TraineePost:
 *        type: object
 *        properties:
 *          email:
 *              type: string
 *              example: harsh.rastogi@successive.tech
 *          name:
 *              type: string
 *              example: Harsh
 *          password:
 *              type: string
 *              example: train@12
 *          role:
 *               type: string
 *               example: trainee
 *      TraineeResponse:
 *        type: object
 *        properties:
 *          _id:
 *              example: 5e4a36bc64824b1f80b730cd
 *          email:
 *              type: string
 *              example: harshrastogi@successive.tech
 *          name:
 *              type: string
 *              example: harsh
 *          role:
 *              type: string
 *              example: trainee
 *          originalId:
 *              example: 5e4a36bc64824b1f80b730cd
 *          createdBy:
 *              example: 5e45404398e86d576ad964e6
 *          createdAt:
 *              example: 2020-02-20T11:33:39.325Z
 *          v:
 *              example:0
 *      Unauthorized:
 *        type: object
 *        properties:
 *          error:
 *              example: Unauthorized
 *          message:
 *              example: Token not found
 *          status:
 *              example: 403
 *          timestamp:
 *               example: 2020-11-25T17:34:37.066Z
 *
 */
traineeRouter.route('/')
    // .get(authMiddleWare('getUsers', 'read'), validationHandler(validation.get), TraineeController.get)
    // .post(authMiddleWare('getUsers', 'write'), validationHandler(validation.create), TraineeController.create)
    // .put(authMiddleWare('getUsers', 'all'), validationHandler(validation.update), TraineeController.update)
    // .delete(authMiddleWare('getUsers', 'delete'), validationHandler(validation.delete), TraineeController.delete);
/**
 * @swagger
 *
 * /api/trainee:
 *   get:
 *     tags:
 *       - Trainee
 *     description: List of all the trainees
 *     security:
 *       - Bearer: []
 *     consumes:
 *       - application/json
 *     produces:
 *        - application/json
 *     responses:
 *       200:
 *         description: Trainee List
 *         schema:
 *              properties:
 *                  status:
 *                      example: OK
 *                  message:
 *                      example: 'successfully fetched Trainee'
 *                  TotalCount:
 *                      example: 10
 *                  TraineeCount:
 *                      example: 2
 *                  data:
 *                      type: object
 *                      allOf:
 *                              - $ref: '#/definitions/TraineeResponse'
 *       403:
 *         description: unauthorised access
 *         schema:
 *              $ref: '#/definitions/Unauthorized'
 */
    .get(validationHandler(validationHandler(validation.get)), TraineeController.get)
/**
 * @swagger
 *
 * /api/trainee:
 *   post:
 *     tags:
 *       - Trainee
 *     description: Returns the success reponse on creation
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: User Created Successfully
 *         schema:
 *              oneOf:
 *              properties:
 *                  status:
 *                      example: OK
 *                  message:
 *                      example: Trainee Created Successfully
 *                  data:
 *                      type: object
 *                      allOf:
 *                          - $ref: '#/definitions/TraineeResponse'
 *                      properties:
 *                              name:
 *                                  type: string
 *                                  example: "ShashankBaranwal"
 *       403:
 *         description: unauthorised access
 *         schema:
 *              $ref: '#/definitions/Unauthorized'
 */
    .post(validationHandler(validation.create), TraineeController.create)
/**
 * @swagger
 *
 * /api/trainee:
 *   put:
 *     tags:
 *       - Trainee
 *     description: Returns the success reponse on Updation
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: User Updated Successfully
 *         schema:
 *              oneOf:
 *              properties:
 *                  status:
 *                      example: OK
 *                  message:
 *                      example: successfully upddate
 *                  data:
 *                      type: object
 *                      allOf:
 *                          - $ref: '#/definitions/TraineeResponse'
 *       403:
 *         description: unauthorised access
 *         schema:
 *              $ref: '#/definitions/Unauthorized'
 */
    .put(validationHandler(validation.update), TraineeController.update)
/**
 * @swagger
 *
 * /api/trainee:
 *   delete:
 *     tags:
 *       - Trainee
 *     description: Returns the success reponse on deletion
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Data deleted
 *         schema:
 *              oneOf:
 *              properties:
 *                  status:
 *                      example: OK
 *                  message:
 *                      example: Deleted successfully
 *                  code:
 *                      example: 200
 *       403:
 *         description: unauthorised access
 *         schema:
 *              $ref: '#/definitions/Unauthorized'
 */
    .delete(validationHandler(validation.delete), TraineeController.delete);

export default traineeRouter;