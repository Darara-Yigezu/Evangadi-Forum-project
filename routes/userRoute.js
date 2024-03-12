const express=require('express');
const router=express.Router();

//authentication middleware
const authMiddleware=require("../middleware/authMiddleware")

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
router .get("/check",authMiddleware,checkUser)
// router .get("/check",checkUser)h

module.exports=router;









//**************************************************** */
// cut from app.js & pasted here
//register route
// router.post("/api/users/register",(req,res)=>{
//     res.send("Registered Successfully")
// })
//login user
// router.post("/api/users/login",(req,res)=>{
//     res.send("logged in Successfully")
// })
//check user
// router.get("/api/users/check",(req,res)=>{
//     res.send("User checked")
// })
// app is replaced by router
// /api/users is common in the 3 above,cut it all & rewrite as blow
//register route
// router.post("/register",(req,res)=>{
//     res.send("user Registered")
// })
// //login user
// router.post("/login",(req,res)=>{
//     res.send("user logged in")
// })
// //check user
// router.get("/check",(req,res)=>{
//     res.send("User checked")
// })
// module.exports = router;

//*******we can simplify the above func to simple**********
//register route
// router.post("/login",register)
//login user
// router.post("/login",login)
// //check user
// router.get("/check",checkUser)

// module.exports = router;

