import mysql from 'mysql'
import host from '../cred.js'



const connection = mysql.createConnection({
    host : host , 
    user : 'ritik' , 
    password : 'ritik12345' , 
    port : '3306'
})

connection.connect(function(err , data){
    if (err) {
        console.error("Error", err);
      } else {
        console.log("Connected");
        connection.query('CREATE DATABASE employeedata' , (err, data)=>{
            if(err){
                console.log("error2" , err)
            }
            else{
                console.log(data)
            }
        })
      }
})