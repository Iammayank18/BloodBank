const Mongoose = require('mongoose');

const DonateSchema = new Mongoose.Schema({
    name: {
        type: String,
        required: true
        },
      phone: {
        type: String,
        required: true
     } ,

     bgroup:{
        type: String,
        required: true
     },
     
     pincode:{
         type: String,
         required: true
     },

        address:{
            type: String,
            required: true
        }

    });

// const User = Mongoose.model('User', userSchema);

module.exports = Mongoose.model('Donate', DonateSchema);