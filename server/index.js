const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path: './.env'});

require('./database/db'); 
// const User = require('./model/userSchema');


// connect router file
app.use(express.json());
const userRouter = require('./router/auth')
app.use('/users',userRouter.rout);


// middleware
const middleware = (req, res, next) => {
    console.log(`Hello my Middleware`);
    next();
}


app.get('/', (req, res) => {
    res.send(`Hello from the server index js`)
});

app.get('/about', middleware, (req, res) => {
    res.send(`Hello from the about page`)
});





app.listen(process.env.PORT, () => {
    console.log('server connected')
});
