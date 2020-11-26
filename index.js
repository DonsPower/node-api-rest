require('dotenv').config();
const express= require('express');
const app = express();
var mysql = require('mysql');
//connection.end();
//seend conexion to api request
app.get("/", (req,res)=>{
    res.send("HELLO WORD ");
});
//running
app.listen(()=>{
    console.log(`Server running in port: ${process.env.TYPEORM_PORT}`);
    
});  


function handleDisconnect() {
   var connection = mysql.createConnection({
      url: process.env.DATABASE_URL,
      type: process.env.TYPEORM_CONECTION,
      host: process.env.TYPEORM_HOST,
      user: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
     // port : process.env.TYPEORM_PORT,               
   })
   connection.connect(function(error){
      if(error){
         throw error;
      }else{
         console.log('Conexion correcta.');
      }
   })                    
   connection.on('error', function(err) {
     console.log('db error', err);
     if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
       handleDisconnect();                         // lost due to either server restart, or a
     } else {                                      // connnection idle timeout (the wait_timeout
       throw err;                                  // server variable configures this)
     }
   });
   connection.end();
 }
 
 handleDisconnect();
