var mysql = require('mysql');
var conn = mysql.createConnection({
    host: "localhost",
    user: "romao",
    password: "Romao83",
    database: "meubanco"
});

conn.connect(function(err){
    if(err) throw err;
    console.log("Conectado!");   
    var sql = "CREATE DATABASE meubanco";
    conn.query(sql, function(err, results){
        if (err) throw err;
        console.log("Banco de dados criado!");
    });
});