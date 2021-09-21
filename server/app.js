const dotenv = require('dotenv');
const { json } = require('express');
const express = require('express');
const Mongoose = require('mongoose');
const app = express();

//Require dotev
dotenv.config( {
    path: './config.env'
});

// Connect to the database
require('./database/conn')

app.use(express.json());


// we link the router file
app.use(require('./router/auth.js'));
app.use(require('./router/Donate.js'));

// Set the port
const port = process.env.PORT;

// Require the user model
const User = require('./model/userSchema');
const UserDonate = require('./model/DonateSchema');







// app.get('/about.js', middleware ,(req,res)=>{
//     res.send('About Page');
// } )

// app.get('/contact.js', (req,res)=>{
//     res.send('Contact page');
// })

// app.get('/Login.js', (req,res)=>{
//     res.send('Login page');
// })

app.get('/Register.js', (req,res)=>{
    res.send('Registration page');
})

app.listen(port, () => {
console.log(`Server running on port ${port}`);
});
