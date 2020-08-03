import express from 'express';
import  db from './config/database';
import routes from './modules';
import middleware from './config/middleware';
const app = express();
db();
middleware(app);
routes(app);

const port = process.env.PORT || 4500
app.listen(port, () => {    
    console.log(`Ujenzi zone app is running on port ${port}`)
})