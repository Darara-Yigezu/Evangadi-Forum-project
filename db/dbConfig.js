const mysql2=require('mysql2');
// Create a connection pool
const dbConnection=mysql2.createPool({
user:process.env.USER,
database:process.env.DATABASE,
host:"localhost",
password:process.env.PASSWORD,
connectionLimit:10
});
// console.log(process.env.PASSWORD)
// console.log(process.env.JWT_SECRET)

//export the connection pool
module.exports=dbConnection.promise;


// dbConnection.execute("select 'test ' ",(err,result)=>{
//     if(err){
//         console.log(err.message);
//     }else{
//         console.log(result)
//     }
// })