const mysql2=require('mysql2');
const dbConnection=mysql2.createPool({user:"evangadi-admin ",
database:"evangadidb",
host:"localhost",
password:"Darex@657585",
connectionLimit:10
});

// dbConnection.execute("select,'test' ",(err,result)=>{
//     if(err){
//         console.log(err.message)
//     }else{
//         console.Log(result)
//     }
// });


//export the connection to be used in other
module.exports=dbConnection.promise; 