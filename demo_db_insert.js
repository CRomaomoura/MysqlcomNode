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
    var sql = "INSERT INTO consumidor (nome, endereco) VALUES ?";
    var values = [['Joao', 'rua das flores - 68'],
                ['marcos', 'rua da paz - 3355'],
                ['Gui', 'rua da pedra - 4455'],
                ['Fabio', 'rua das Adagas - 5588'],
                ['Lucas', 'rua das Arcaçias - 5556']
                ];
    conn.query(sql,[values], function(err, results){
        if (err) throw err;
        console.log(results.affectedRows + " Registros inseridos com sucesso!");
    });
});