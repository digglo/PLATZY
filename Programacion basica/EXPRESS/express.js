let cafecito = require("express");
let aplicacion = cafecito();


// se coloco / ya que esta linea representa el inicio de la ruta
// lo de abajo es como un addEventListener()
aplicacion.get("/", inicio);
aplicacion.get("/cursos", cursos);

//REQUEST es como peticion, lo que el navegador le pide al servidor
//RESPONST lo que el servidor le quiere mandar al navegador

function inicio(peticion,resultado){

 resultado.send("Este es el <strong>INICIO</strong>");

}

function cursos(req,res){

  res.send("Estos son los <strong>CURSOS</strong>");

}

aplicacion.listen(8989);