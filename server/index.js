const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express();
require('./database/db');

dotenv.config({ path: './.env'});



// middleware
const middleware = (req, res, next) => {
    console.log(`Hello my Middleware`);
    next();
}


app.get('/', (req, res) => {
    res.send(`Hello from the server`)
});

app.get('/about', middleware, (req, res) => {
    res.send(`Hello from the about page`)
});


// Connection();


app.listen(process.env.PORT, () => {
    console.log('server connected')
});
