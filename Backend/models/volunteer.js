const mongoose = require('mongoose');


const dataSchema = new  mongoose.Schema({
    First_Name:{
        required:true,
        type:String,
        trim: true,
        min: 3,
        max: 20,
    },
    Last_Name:{
        required:true,
        type:String,
        trim: true,
        min: 3,
        max: 20,
    },
    Volunteer_Address:{
        required:true,
        type:String,
    },
    Volunteer_Email:{
        required:true,
        type:String,
        trim: true,
        unique: true,
        lowercase: true,
    },
    Gender:{
        required:true,
        type:String,
    },
    Volunteer_Subject:{
        required:true,
        type:String,
    },
    Qualification:{
        required:true,
        type:String,
    },
    Experience:{
        required:true,
        type:String,
    },
    About:{
        required:true,
        type:String,
    },
    Document:{
        required:true,
        type:String,
    },
    Volunteer_Username:{
        required:true,
        type:String,
        trim: true,
        unique: true,
        lowercase:true,
        index: true,
    },
    Volunteer_Password:{
        required:true,
        type:String,
    },
    role: {
        type: String,
        enum: ["volunteer", "school"],
        default: "volunteer",
     },
},{ timestamps: true });


module.exports=mongoose.model('volunteer',dataSchema);