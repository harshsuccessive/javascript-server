import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json'

import  errorHandler  from './libs/routes/errorHandler';
import  notFoundRoute from './libs/routes/notFoundRoute';
import routes from './router';
import Database from './libs/Database';


class Server {
    app;
    constructor (private config) {
        this.app = express();
    }

    bootstrap() {
        this.initBodyParser();
        this.setupRoutes();
        return this;
    }

    setupRoutes() {


        const { app } = this;

        this.app.use( (req: Request, res: express.Response, next: express.NextFunction ) => {
            console.log(req.body);
            next();
        });

        this.app.use( '/health-check', (req: Request, res: express.Response, next: express.NextFunction) => {
            console.log('Inside second middleware');
            res.send('I am Ok');
        });

        this.app.use('/api', routes);
        this.app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));



        this.app.use(notFoundRoute);

        this.app.use(errorHandler);


        return this;
    }


    public initBodyParser() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));

    }



    run() {
        const {app, config: { port }} = this;
        Database.open('mongodb://localhost:27017/express-training')
        .then( ( res ) => {
            console.log('Successfully connected to mongo');
            app.listen(port, (err) => {
                if ( err ) {
                    console.log(err);
                }
                console.log('App is running', port);
        });

        })
        .catch(err => console.log(err));
    }
}

export default Server;