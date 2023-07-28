const dotenv = require("dotenv");
// const mongoose = require('mongoose');
const express = require('express');
const app = express();
require('./database/db');
// import Connection from "./database/db";

dotenv.config({ path: './.env'});


// const Connection = async () => {
//     const URL = process.env.DATABASE;
//     try {
//         await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
//         console.log('Dtabase connected Successfully')
//     } catch (error) {
//         console.log('Error while connecting with the database', error.message);
//     }
// }

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
