const mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config({ path: './.env'});

const Connection = async () => {
    const URL = process.env.DATABASE;
    try {
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database connected Successfully')
    } catch (error) {
        console.log('Error while connecting with the database', error.message);
    }
}


Connection();
