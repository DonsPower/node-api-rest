require("dotenv").config();
const express= require('express');
const app = express();
let port= process.env.PORT || 3001;
let mysql= require("mysql");

//connection to database
var connection= mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "login_controlaccess",
    port: "3306"
});
connection.connect((err)=>{
    if (err) {
        throw err;
    } else {
        console.log("connected to database :D");
    }
});

//seend conexion to api request
app.get("/", (req,res)=>{
    res.send("HELLO WORD");
});
//running
app.listen(port, ()=>{
    console.log(`Server running in port: ${port}`);
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       