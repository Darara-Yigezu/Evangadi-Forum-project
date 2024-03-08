const express=require('express');
const router=express.Router();
//register route
// router.post("register",(req,res)=>{
//     res.send("register user")
// })

//user controllers
const {register,login,checkUser}=require("../controller/userController");

router.post("/register",register)

//login user
router.post("/login",login)

//check user
router .get("/check",checkUser)

module.exports=router;
