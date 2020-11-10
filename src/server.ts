import * as express from 'express';
import * as bodyParser from 'body-parser';

import  errorHandler  from './libs/routes/errorHandler';
import  notFoundRoute from './libs/routes/notFoundRoute';
import routes from './router';


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



        this.app.use(notFoundRoute);

        this.app.use(errorHandler);


        return this;
    }


    public initBodyParser() {
        this.app.use(bodyParser.json());

    }



    run() {
        const {app, config : { port } } = this;
        app.listen( port, (err) => {
            if ( err ) {
                console.log(err);
            }
            console.log('App is running', port);
        });
    }
}

export default Server;