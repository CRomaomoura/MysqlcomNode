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
    var sql = "CREATE TABLE consumidor (id INT AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(150), endereco VARCHAR(150))";
    conn.query(sql, function(err, results){
        if (err) throw err;
        console.log("Tabela criada com sucesso!");
    });
});