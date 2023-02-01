const mysql = require('mysql');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/telefonos/', (req, res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "Base"
    });

    let sql = "select * from tbl_telefonos";

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, function(err, result){

                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    } );

});

app.get('/api/telefono/:id', (req,res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "Base"
    });

    let sql = "select * from tbl_Telefono where id_persona = ?";
    let parametros = [req.params.id];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });

});

app.post('/api/telefono/', (req, res)=>{

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "Base"
    });

    let sql = "insert into tbl_Telefono " +
            " (apellido_Telefono, Id) " +
            " values (?, ?, ?)";
    
    let parametros = [  req.body.nombre_persona, 
                        req.body.apellido_persona, 
                        req.body.fecha_nacimiento
                    ];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });
} );

app.put('/api/telefono/:id', (req, res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "Base"
    });

    let sql = " update tbl_telefono set nombre_persona = ?, " +
                " set numero = ?,  "+
                " where id_telefono = ? ";
                " where id_persona = ? ";

    let parametros = [  req.body.Id_telefono, 
                        req.body.Id_persona, 
                        req.body.numero, 
                        req.params.id];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });

});

app.delete('/telefono/:id', (req, res)=>{

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "Base"
    });

    let sql = "delete from tbl_telefono where id_telefono = ?";

    let parametros = [req.params.id];

    con.connect(function(err){

        if (err){
            res.send(err);
        }else{
            con.query(sql, parametros, function(err, result){
                if (err){
                    res.send(err);
                }else{
                    res.send(result);
                }
            });
        }
    });

});

app.listen(8870);