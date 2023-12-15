require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Volunteer=require('../models/volunteer');
const School=require('../models/school');
const router=express.Router();


router.post('/login', async (req, res) => {
  //    volunteer
  if(req.body.role === "volunteer"){
  try {
    const { Volunteer_Username,  Volunteer_Password } = req.body;
    const user = await Volunteer.findOne({  Volunteer_Username: Volunteer_Username });
    //console.log(user);
    
    if (!user) {
      return res.status(401).json({ error: 'Username invalid or not exist' });
      // return res.status(404).send("username invalid or not exist");
    }

    const isPasswordValid=bcrypt.compareSync(Volunteer_Password, user.Volunteer_Password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Incorrect Password type the coorect paasword' });
    }
  
    const token= jwt.sign({ userId: user._id},process.env.ACCESS_TOKEN);
    res.json({access_token : token});
    res.header('auth',token).send(token);
    res.status(200).send("login successful");

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Login failed' });
  }
}

// school
else if(req.body.role === "school"){
  try {
    const { School_Username,  School_Password } = req.body;
    const user = await School.findOne({School_Username: School_Username });
    //console.log(user);
    
    if (!user1) {
      return res.status(401).json({ error: 'Username invalid or not exist' });
      // return res.status(404).send("username invalid or not exist");
    }

    const isPasswordValid=bcrypt.compareSync(School_Password, user1.School_Password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Incorrect Password type the coorect paasword' });
    }
  
    const token= jwt.sign({ userId: user._id},process.env.ACCESS_TOKEN);
    res.json({access_token : token});
    res.header('auth1',token).send(token);
    res.status(200).send("login successful");

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Login failed' });
  }
}
});

const validUser=(req,res,next)=>{
  var token=req.header('auth');
  req.token=token;
  next();
}

router.get('/getall',validUser,async(req,res)=>{
  jwt.verify(res.token,ACCESS_TOKEN,async (err,data)=>{
    if(err){
      res.sendStatus(403);
    }
    else{
      const data =await Volunteer.find();
      res.json(data);
    }
  })
})
module.exports=router;
