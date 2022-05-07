import express, { json } from 'express';
import { serverPort } from './dot-env.js';
import cors from 'cors';
import dbConnectMiddleware from './middlewares/dbConnectMiddleware.js';
import router from './routes/routes.js';

const app = express();
const server = () => {

    //middlewares
    app.use(json());
    app.use(cors());
    app.use(dbConnectMiddleware);

    //routes
    app.use(router);
    
    app.listen(serverPort, () => { console.log(`server running at port ${serverPort}`); });
}

server();