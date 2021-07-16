const express=require('express');
const cors=require('cors');
const morgan=require('morgan');
const jwt =require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const app=express();

const UserRouter=require('./Router/index');
const UserContact=require('./Router/contact');
app.use(express.json());
// app.use('/diggi', digvijayrouter);

app.use('/contact' , UserContact);

app.use(UserRouter);

module.exports=app;