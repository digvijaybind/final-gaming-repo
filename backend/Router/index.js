const express=require('express');
const router=express.Router();
const userController=require('../Controller/userController');



router.post('/login',userController.login);
// router.get('/register1' , registerController.register );
module.exports=router;