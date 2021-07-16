import Contact from '../Model/contactdb';
import * as jwt from 'jsonwebtoken';


exports.create=async(req,res) =>{
  const data={

      contact_name:req.body.contact_name,
      contact_no:req.body.contact_no
  }
  let Contact=await new Contact(data).save()
  res.send(Contact);
}

exports.update=async(req,,next) =>{
  const data={
   id:req.params.id;
   contact_name:req.body.contact_name,
   contact_no:req.boy.contact_no
  }
 Contact.findAll(id).then((result) =>{
   res.status(200).json({
       message:"data is updated",
       data:Contact
   })else{
     res.status(404).json({
         message:"msg is error",
     })
   }
 })catch((err) =>{
   next(err);
 })



    
}