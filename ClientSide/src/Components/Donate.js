import React from 'react'
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

const Donate = () => {

    const history=useHistory();

    const [GetBlood, setGetBlood] = useState({
        name:" ",phone:"",bgroup:"", pincode:"",address:""
    });


    let name, value;
   const handleInputs =(e)=>{
   console.log(e);
    name = e.target.name;
    value = e.target.value;
    setGetBlood({...GetBlood, [name]: value});

   }
   const postData = async (e)=>{
       e.preventDefault();


    const {name, phone, bgroup, pincode, address} = GetBlood;
    
   const res = await fetch("/Donate-auth", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"    
        },
        body: JSON.stringify({
           name,
            phone,
            bgroup,
            pincode,
            address 
        })
   }) ;

 const response = await res.json();

 if(response.status === 422 || !response){
  window.alert("Please enter all the details");
  console.log(response);
  console.log("Please enter all the details")
 }else{
  window.alert("Successfully FIlled DOnation form");
  console.log(response);
  console.log("Success")
  history.push("/");
 }

}


    return (
        <div>
        <div className="container text-center mt-5">
            <h1>Donate Blood Form</h1>
            <p class="text-danger">Please fill all the details</p>
        </div>
        <div className="container mt-5 border p-5">
        <form method="POST">
        <div className="form-floating mb-3 ">
         <input type="text" name="name" className="form-control" id="floatingInput" placeholder="Full name"
            value={GetBlood.name} 
            onChange={handleInputs}
            />
         <label for="floatingInput">Full name</label>
         </div>
         
         <div className="form-floating mb-3">
         <input type="text" name="phone" className="form-control" id="floatingInput" placeholder="Phone Number"
              value={GetBlood.phone} 
            onChange={handleInputs}
         />
         <label for="floatingInput">Phone Number</label>
         </div>

         <div className="form-floating mb-3">
         <input type="text" name="bgroup" className="form-control" id="floatingInput" placeholder="Enter Your Blood Group"
             value={GetBlood.bgroup}
                onChange={handleInputs}
         />
         <label for="floatingInput">Enter Your Blood Group</label>
         </div>
         
         <div class="form-floating mb-3">
         <input type="number" name="pincode" maxlength="6" class="form-control" id="floatingInput" placeholder="name@example.com"
                value={GetBlood.pincode}
                onChange={handleInputs}
         />
         <label for="floatingInput">Pincode</label>
         </div>

         <div className="form-floating">
         <textarea className="form-control" name="address" placeholder="Address" id="floatingTextarea2"
         
            value={GetBlood.address}
            onChange={handleInputs}
          ></textarea>
         <label for="floatingTextarea2">Address</label>
         </div>
         <input type="submit" className="btn mt-3 btn-primary"
           onClick={postData}
         />
         </form>
        </div>
        </div>
    )
}

export default Donate
