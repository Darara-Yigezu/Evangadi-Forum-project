const express=require('express');
const app=express();
const port=3306;
//db connection
const dbConnection=require("./db/dbConfig"); 

//middleware for parsing json data in the request body
app.use(express.json()); 

//Users Router middleware file
const userRoutes=require("./routes/userRoute")

//user routes middleware
app.use("api/users",userRoutes)
//Question routes middleware?

//Answers Middlewares

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

