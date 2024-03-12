require("dotenv").config();
const express=require('express');
const app=express();
const port=5500;

const cors=require('cors');
app.use(cors());
// *******db connection*******************************************
const dbConnection=require("./db/dbConfig"); 

// ********middleware for parsing json data in the request body*****
app.use(express.json());  

//********* * Users Router middleware file**************************
const userRoutes=require("./routes/userRoute")
//*******questions Router middleware file**************************
const questionsRoutes=require("./routes/questionRoute")
//Authentication middleware file
const authMiddleware=require("./middleware/authMiddleware")
//****** user routes middleware************************************
app.use("api/users",userRoutes)
// Question routes middleware?
app.use("/api/questions",authMiddleware,questionsRoutes);
// Answers Middlewares

async function start(){
    try{
        const result= await dbConnection.execute("select,'test' ")
        app.listen(port)
        console.log("Database connection is established ")
        console.log(`Listening on ${port}`)
       }catch(error){
           console.log(error.message);
   }  
}
start();




//LEFT FOR PRACTICE
//request is sent to home
// app.get("/",(req,res)=>{
//     res.send("Welcome")
// })
// //register route
// app.post("/api/users/register",(req,res)=>{
//     res.send("Registered Successfully")
// })
// //login user
// app.post("/api/users/login",(req,res)=>{
//     res.send("logged in Successfully")
// })
// //check user
// app.get("/api/users/check",(req,res)=>{
//     res.send("User checked")
// })


//user routes middleware file
// const userRoutes = require('./routes/userRoute')

//user routes middleware
// app.use('/api/users',userRoutes)

app.listen(port,(error)=>{
    if(error) {
    console.log(error)
    }
    else{
        console.log(`Listening on port: ${port}`)
    }  
})