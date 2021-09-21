const express = require('express');
const router = express.Router();

require('../database/conn');
const GetBlood = require('../model/userSchema');


router.get('/', (req, res) => {
    res.send('Hello World! , from router');
    });
    

router.post('/register', (req, res) => {
    
    const  {  name,phone,bgroup,pincode,address } = req.body
    console.log(req.body);
   if(!name || !bgroup || !phone || !bgroup) {
    //    return res.status(400).send({});
    return res.status(422).json({error : 'Please fill all the fields'});
     
}
   
GetBlood.findOne({phone: phone})
    .then((user )=> {
        if(user) {
            return res.status(422).json({error : 'Phone Number already exists'});
        }
        const newUser = new GetBlood({
            name,
            phone,
            bgroup,
            pincode,
            address 
        });
       
        newUser.save().then(()=>{
            res.status(201).json({GetBlood : 'You have registered successfully'});
        }).catch((err)=>{ console.log(err) });
    })

    });


    router.get('/about' ,(req,res)=>{
    res.send('About Page');
} )


module.exports = router;