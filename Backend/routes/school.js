const express=require('express');
const model=require('../models/school');
const router=express.Router();

router.post('/school',async (req,res)=>{
    const data=new model ({
    School_Name:req.body.School_Name,
    School_city:req.body.School_city,
    School_Province:req.body.School_Province,
    School_Email:req.body.School_Email,
    School_Phonenumber:req.body.School_Phonenumber,
    School_Subject:req.body.School_Subject,
    School_Location:req.body.School_Location,
    Requirement:req.body. Requirement,
      });
     
    try{
      const datatoSave= await data.save();
      res.status(201).json(datatoSave);
     
    }
    catch(error){
      res.status(400).json({message: error.message})
    }
  });

  router.get('/school',async(req,res)=>{
    try{
        const data = await model.find();
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});


router.get('/school/:id',async(req,res)=>{
    try{
        const data = await model.findById(req.params.id);
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});

router.put('/school/:id',async(req,res)=>{
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

router.delete('/school/:id',async(req,res)=>{
    try{
        
        const result = await model.findByIdAndDelete( req.params.id);
        res.send('Data Successfully deleted');
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});


module.exports=router;