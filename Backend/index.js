require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
const routes1 = require('./routes/volunteer_signup');
const routes2 = require('./routes/school_signup');
const routes3 = require('./routes/login');
const routes4 = require('./routes/volunteer');
const routes5 = require('./routes/school');


const mongoString=process.env.DATABASE_URL;
const app=express();

mongoose.connect(mongoString); //connection
const database=mongoose.connection;
database.on('error' , (err)=>console.log(err));
database.on('connected' , () => console.log('Database Connected'));

app.use(express.json());
app.use('/api', routes1);
app.use('/api', routes2);
app.use('/api', routes3);
app.use('/api', routes4);
app.use('/api', routes5);

app.listen(5003,()=>{
    console.log('Server started at loacalhost');
}); 

