const express=require('express');
const model=require('../models/school');
const router=express.Router();
var bcrypt = require('bcryptjs');

router.post('/signupschool',async (req,res)=>{

  var password=req.body.School_Password;
  var salt = bcrypt.genSaltSync(20);
var hash_password = bcrypt.hashSync(password, salt);


var confirm_password=req.body.School_Confirm_Password;
if(password !== confirm_password){
 return  res.status(201).json({error:"Confirm password not matching"});

}

   const data=new model ({
    School_Name:req.body.School_Name,
    School_city:req.body.School_city,
    School_Province:req.body.School_Province,
    School_Email:req.body.School_Email,
    School_Phonenumber:req.body.School_Phonenumber,
    School_Subject:req.body.School_Subject,
    School_Location:req.body.School_Location,
    Requirement:req.body. Requirement,
    School_Username:req.body.School_Username,
    School_Password:hash_password,
    role:req.body.role,
  });
   
  try{
    const datatoSave= await data.save();
    res.status(201).json(datatoSave);
   
  }
  catch(error){
    res.status(400).json({message:error.message})
  }
});

module.exports=router;