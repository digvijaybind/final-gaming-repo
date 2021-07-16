const express=require('express');
const app=require('./app');


const port=7000;

app.listen(port ,(req,res)=>{
    console.log(`listening is port${port}`)
});