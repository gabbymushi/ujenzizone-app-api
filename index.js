const express = require('express');
const db = require('./config/database');
const app = express();
db();
const port = process.env.PORT || 4500
app.listen(port, () => {
    console.log(`Ujenzi zone app is running on port ${port}`)
})