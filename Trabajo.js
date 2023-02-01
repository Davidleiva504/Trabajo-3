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
            " (nombre_persona, apellido_Telefono, fecha_nacimiento) " +
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

app.put('/api/persona/:id', (req, res)=>{


    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "Base"
    });

    let sql = " update tbl_persona set nombre_persona = ?, " +
                " apellido_persona = ?,  "+
                " fecha_nacimiento = ? "+
                " where id_persona = ? ";

    let parametros = [  req.body.nombre_persona, 
                        req.body.apellido_persona, 
                        req.body.fecha_nacimiento, 
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

app.delete('/api/persona/:id', (req, res)=>{

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