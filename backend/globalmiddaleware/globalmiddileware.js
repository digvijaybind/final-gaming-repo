const validationResult=require('express-validator');
const jwt=require('jsonwebtoken');


exports.globalmiddleware=async((req,res)=>{
 static checkerror(req,res,next) {
     const error =validationresult(req);
     if(!error.isEmpty()){
         next(new Error (error.array()[0].msg));

     }else{
         next();
     }

 static async authenticate(req,res,next){
   
   const authHeader=req.header.authorization;
   const token = authHeader ? authHeader : null;

   try{
       Jwt.verify(token , 'secret' ,((err,decode) =>{
           if(err){
               next(err)
           } else if (!decode){
               req.errorStatus=401;
               next(new Error('user not authorised'))
           } else{
               req.user=decode;
               next();
           }
       }))
   } catch(e) {
       req.errorStatus= 401;
       next(e);
   }
 
 }



}