const express=require('express');
const dotenv=require('dotenv');
const cors=require('cors');
const app=express();
const router= require('./routes/taskRouter');

app.set('port', process.env.PORT || 3005);
app.use(cors());
app.use(express.json());
app.use('/api', router);


module.exports=app;