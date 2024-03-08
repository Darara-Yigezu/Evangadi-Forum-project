//db connection
const express=require("express");
const dbConnection=require("../db/dbConfig");

// async function register(req,res){
//     res.send('register');
// }

  async function register(req,res){
    const {username, firstname, lastname, email,  password} = req.body;
    if(!email || !password || !firstname || !lastname || !username ){
        return res.status(400).json({msg:"Please provide all the required fields"});
    }
    try{
        const [user]=await dbConnection.query("select, username,userid from users where username=? or  email=?",[username,email]);
       if(user.length>0){
        return res.status(400).json({msg:"user already registered"})
       }
       if(password.length<=8){
       return res.status(400).json({msg:`Password should be atleast 8 characters`})
       }

     await dbConnection.query("INSERT INTO users (userName, firstName, lastName, email, password) VALUES(?,?,?,?,?)",
     [username,firstname,lastname,email,password])
     return res.status(201).json({msg:"User created!"})

    }catch (error){
        console.log(error.message);
        return res.status(500).json({msg:"Some thing went wrong!"})
 }
}

 async function login(req,res){
    res.send('login');
}

 async function checkUser(req,res){
    res.send('check user ');
}
module.exports = {register,login,checkUser};