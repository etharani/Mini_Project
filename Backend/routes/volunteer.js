const express=require('express');
const model=require('../models/volunteer');
const router=express.Router();

router.post('/volunteer',async (req,res)=>{
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
        role:req.body.role,
      });
     
    try{
      const datatoSave= await data.save();
      res.status(201).json(datatoSave);
     
    }
    catch(error){
      res.status(400).json({message: error.message})
    }
  });

  router.get('/volunteer',async(req,res)=>{
    try{
        const data = await model.find();
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});


router.get('/volunteer/:id',async(req,res)=>{
    try{
        const data = await model.findById(req.params.id);
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});

router.put('/volunteer/:id',async(req,res)=>{
    try{
        
        const result = await model.findByIdAndUpdate(
            req.params.id ,req.body,{
                new:true
            }
        );

        res.json(result);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});

router.delete('/volunteer/:id',async(req,res)=>{
    try{
        
        const result = await model.findByIdAndDelete( req.params.id);
        res.send('Data Successfully deleted');
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});


module.exports=router;
