import * as dotenv from 'dotenv';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import express from 'express';
dotenv.config();
export default (app: express.Application) => {
    app.use(bodyParser.json());
    app.use(morgan('dev'));
}
