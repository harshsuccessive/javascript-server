import * as express from 'express';
import * as bodyParser from 'body-parser';

import  errorHandler  from './libs/routes/errorHandler'
import  notFoundRoute from './libs/routes/notFoundRoute'


class Server{
    app
    constructor(private config){
        this.app = express()
    }

    bootstrap(){
        this.initBodyParser();
        this.setupRoutes();
        
        return this;
    }

    setupRoutes(){


        const { app } = this;



        this.app.get('/health-check',(req, res, next) =>{
            console.log("Inside second middleware");
            res.send('I am Ok');
        });



        this.app.use(notFoundRoute);

        this.app.use(errorHandler);


        return this;
    }


    public initBodyParser(){
        this.app.use(bodyParser.json({ type: 'application/*+json' }));

    }



    run(){
        const {app, config :{port}} = this;
        app.listen(port,(err) =>{
            if(err){
                console.log(err);
            }
            console.log('App is running', port)
        })
    }
}

export default Server;