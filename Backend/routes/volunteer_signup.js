const express=require('express');
const model=require('../models/volunteer');
const router=express.Router();
var bcrypt = require('bcryptjs');


router.post('/signupvolunteer',async (req,res)=>{

  var password=req.body.Volunteer_Password;
  var salt = bcrypt.genSaltSync(10);
var hash_password = bcrypt.hashSync(password, salt);


var confirm_password=req.body.Volunteer_Confirm_Password;
if(password !== confirm_password){
 return  res.status(201).json({error:"Confirm password not matching"});

}

   const data=new model ({
    First_Name:req.body.First_Name,
    Last_Name:req.body.Last_Name,
    Volunteer_Address:req.body.Volunteer_Address,
    Volunteer_Email:req.body.Volunteer_Email,
    Gender:req.body.Gender,
    Volunteer_Subject:req.body.Volunteer_Subject,
    Qualification:req.body.Qualification,
    Experience:req.body.Experience,
    About:req.body.About,
    Document:req.body.Document,
    Volunteer_Username:req.body.Volunteer_Username,
    Volunteer_Password:hash_password,
    role:req.body.role,
  });


   
  try{
    const datatoSave= await data.save();
    res.status(201).json(datatoSave);
   
  }
  catch(error){
    res.status(400).json({message:error.message})
  }
}
);

module.exports=router;