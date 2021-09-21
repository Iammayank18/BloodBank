const express = require('express');
const router = express.Router();

require('../database/conn');
const Donate = require('../model/DonateSchema');


router.get('/', (req, res) => {
    res.send('Hello World! , from router');
    });
    

router.post('/Donate-auth', (req, res) => {
    
    const  {  name,phone,bgroup,pincode,address } = req.body
    console.log(req.body);
   if(!name || !bgroup || !phone || !bgroup) {
    //    return res.status(400).send({});
    return res.status(422).json({error : 'Please fill all the fields'});
     
}
   
Donate.findOne({phone: phone})
    .then((user )=> {
        if(user) {
            return res.status(422).json({error : 'Phone Number already exists'});
        }
        const newUser = new Donate({
            name,
            phone,
            bgroup,
            pincode,
            address 
        });
       
        newUser.save().then(()=>{
            res.status(201).json({Donate : 'You have registered successfully'});
        }).catch((err)=>{ console.log(err) });
    })

    });

module.exports = router;