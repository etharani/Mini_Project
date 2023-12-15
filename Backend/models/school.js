const mongoose = require('mongoose');


const dataSchema1 = new  mongoose.Schema({
    School_Name:{
        required:true,
        type:String,
        trim: true,
        min: 3,
        max: 50,
    },
    School_city:{
        required:true,
        type:String,
        trim: true,
        min: 3,
        max: 20,
    },
    School_Province:{
        required:true,
        type:String,
    },
    School_Email:{
        required:true,
        type:String,
        trim: true,
        unique: true,
        lowercase: true,
    },
    School_Phonenumber:{
        required:true,
        type:String,
    },
    School_Subject:{
        required:true,
        type:String,
    },
    School_Location:{
        required:true,
        type:String,
    },
    Requirement:{
        required:true,
        type:String,
    },
    School_Username:{
        required:true,
        type:String,
        trim: true,
        unique: true,
        lowercase: true,
        index: true,
    },
    School_Password:{
        required:true,
        type:String,
    },
    role: {
        type: String,
        enum: ["volunteer", "school"],
        default: "school",
     },
},{ timestamps: true });

module.exports=mongoose.model('school',dataSchema1);