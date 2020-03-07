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
    var sql = "SELECT nome, endereco FROM consumidor";
    conn.query(sql, function(err, results, fields){
        if (err) throw err;
        /*console.log(results);*/
        console.log(results[2].nome);
        console.log(results[4].endereco);
        /*console.log(fields);*/
    });
});