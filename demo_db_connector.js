var mysql = require('mysql');
var conn = mysql.createConnection({
    host: "localhost",
    user: "romao",
    password: "Romao83",
    
});

conn.connect(function(err){
    if(err) throw err;
    console.log("Conectado!");   
});
