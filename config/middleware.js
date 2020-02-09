require('dotenv').config();
const morgan=require('morgan');
const bodyParser = require('body-parser');
module.exports=(app)=>{
    app.use(bodyParser.json());
    app.use(morgan('dev'));   
}
