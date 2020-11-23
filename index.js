require('dotenv').config();
const express= require('express');
const app = express();
let port= process.env.TYPEORM_PORT || 3000;
var mysql = require('mysql');
//connection.end();
//seend conexion to api request
app.get("/", (req,res)=>{
    res.send("HELLO WORD ");
});
//running
app.listen(port, ()=>{
    console.log(`Server running in port: ${port}`);
    
});  

var connection = mysql.createConnection({
   url: process.env.DATABASE_URL,
   host: process.env.TYPEORM_HOST,
   user: process.env.TYPEORM_USERNAME,
   password: process.env.TYPEORM_PASSWORD,
   database: process.env.TYPEORM_DATABASE

})
connection.connect(function(error){
   if(error){
      throw error;
   }else{
      console.log('Conexion correcta.');
   }
})
connection.end();