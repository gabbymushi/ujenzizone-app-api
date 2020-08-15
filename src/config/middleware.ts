import * as dotenv from 'dotenv';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
dotenv.config();

export default (app: express.Application) => {
    app.use(cors());
    app.use(bodyParser.json());
    app.use(morgan('dev'));
    
}
