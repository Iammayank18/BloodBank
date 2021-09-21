const Mongoose = require('mongoose');

//Mongodb Database connection
const DB = process.env.DATABASE;

Mongoose.connect(DB).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Error connecting to MongoDB');
    console.log(err);
});
