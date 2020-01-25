const express = require('express');
const db = require('./config/database');
const routes = require('./modules');
const app = express();
db();
routes(app);
const port = process.env.PORT || 4500
app.listen(port, () => {    
    console.log(`Ujenzi zone app is running on port ${port}`)
})