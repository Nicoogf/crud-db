
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express() ;




app.use(cors())  ;
app.use(express.json()) ;



const db = mysql.createConnection({
    host: "localhost",
    user : "root",
    password : "03051996-mysql",
    database : "empleados_crud",
    port: 3310
}) ;

app.post ( "/create" , (req,res) => {
    const nombre = req.body.nombre;
    const edad = req.body.edad ;
    const pais = req.body.pais ;
    const cargo = req.body.cargo ;  
    const expeciencia = req.body.experiencia

    db.query('INSERT INTO empleados(nombre,edad,pais,cargo,experiencia) VALUES(?,?,?,?,?)',[ nombre ,edad , pais , cargo , expeciencia ],
    (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send( "Empleado Registrado exitosamente")
        }
    })
} ) ;

app.listen( 3001 , () => {
    console.log( "Servidor corriendo en puerto 3001 ")
})