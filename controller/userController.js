//db connection(backend part)
const dbConnection=require("../db/dbConfig");
//for encrypting  password
const bcrypt=require('bcrypt');
const {StatusCode, StatusCodes}=require("http-status-codes");
const jwt=require("jsonwebtoken");

// async function register(req,res){
//     res.send('register');
// }

//login,reg,check comes from user route w/c connect to db
  async function register(req,res){
    const {username, firstname, lastname, email,  password} = req.body;
    if(!email || !password || !firstname || !lastname || !username ){
        return res.status(StatusCodes.BAD_REQUEST).json({msg:"Please provide all the required fields"});
    }
    try{
        const [user]=await dbConnection.query("select, username,userid from users where username=? or  email=?",[username,email]);
       if(user.length>0){
        return res.status(StatusCodes.BAD_REQUEST).json({msg:"user exist!"})
       }
       if(password.length<=8){
       return res.status(StatusCodes.BAD_REQUEST).json({msg:"Password should be atleast 8 characters"})
       }
       //encrypt password
       const salt = await bcrypt.genSalt(10);
       const hashedPassword=await  bcrypt.hash(password,salt);

     await dbConnection.query("INSERT INTO users (userName, firstName, lastName, email, password) VALUES(?,?,?,?,?)",
     [username,firstname,lastname,email,hashedPassword])
     return res.status(StatusCodes.CREATED).json({msg:"User registered!"})

    }catch (error){
        console.log(error.message);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:"Some thing went wrong!"})
 }
 try{
const [user]=await dbConnection.query("select, username,userid from users where username=? or  email=?",[email]);
 if(user.length==0){
  return res.status(StatusCodes.NOT_FOUND).json({msg:"invalid  credentials"})
 }
//compare password
const isMatch=await bcrypt.compare(password,user[0].password);
if (!isMatch) {
  return res.status(StatusCodes.NOT_FOUND).json({msg:`No user found with this ${id}`})
  }
  const username=user[0].username
  const userid=user[0].userid
//  const token= jwt.sign({username,userid},"secret",{expiresIn:"30d"})
const token= jwt.sign({username,userid},process.env.JWT_SECRET,{expiresIn:"30d"})

 return res.status(StatusCodes.OK).json({msg:"user login successfully",token})

 }catch(error){
    console.log(error.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:"Some thing went wrong!"})
 }
}

 async function login(req,res){
    const {email, password}=req.body
    if (!email || !password) {
      return res.status(StatusCodes.BAD_REQUEST).json({ msg: "Please enter correct  credentials." });
    }
    res.send('login');
}

 async function checkUser(req,res){
  const username=req.user.username;
  const userid=req.user.userid;
  res.status(StatusCodes.OK).json({msg:"Valid user",username,userid})
    // res.send('check user ');//remove it
}
module.exports = {register,login,checkUser};