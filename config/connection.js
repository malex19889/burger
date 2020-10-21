// require mysql
const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.MYSQLPW,
    database: "burgers_db"
});

connection.connect(function(err){
    if(err){
        throw err
    }
    console.log("connected as id "+ connection.threadId);
})

// export connection
module.exports = connection;