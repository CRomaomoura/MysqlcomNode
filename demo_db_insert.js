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
    var sql = "INSERT INTO consumidor (nome, endereco) VALUES ('Joaozim da silva', 'Rua 22 de marco 1022')";
    conn.query(sql, function(err, results){
        if (err) throw err;
        console.log("Registro inserido com sucesso!");
    });
});