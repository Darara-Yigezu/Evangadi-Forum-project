const mysql2=require('mysql2');
const dbConnection=mysql2.createPool({
user:"evangadi-admin ",
database:"evangadi-db",
host:"localhost",
password:"Darex@657585",
connectionLimit:10
});

//export the connection to be used in other
module.exports=dbConnection.promise;


// dbConnection.execute("select 'test ' ",(err,result)=>{
//     if(err){
//         console.log(err.message);
//     }else{
//         console.log(result)
//     }
// })