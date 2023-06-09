
import mysql from "mysql";

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'crud-cemento'
})

connection.connect((err) => {
    if(err){
        console.log(err);
    }else{
        console.log('Connected succesfully to MYSQL');
    }
})