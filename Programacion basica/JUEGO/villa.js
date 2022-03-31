var canvas = document.getElementById("papel");
var hoja = canvas.getContext("2d");
let cantidad = aleatorio(1,10);

//cargar imagenes en canvas
function dibujar(){

  if(fondo.cargaOk==true){

    hoja.drawImage(fondo.imagen, 0, 0);

  }if(vaca.cargaOk=true){

    for(let v=0;v<cantidad;v++){

     let x = aleatorio(0, 7);
     let y = aleatorio(0, 7);
     x = x *60;
     y = y *60;
     hoja.drawImage(vaca.imagen, x, y);

    }
  }if(pollo.cargaOk=true){

    for(let p=0;p<cantidad;p++){

     let x = aleatorio(0, 7);
     let y = aleatorio(0, 7);
     x = x *60;
     y = y *60;
     hoja.drawImage(pollo.imagen, x, y);

    }

  }if(cerdo.cargaOk=true){

    for(let c=0;c<cantidad;c++){

     let x = aleatorio(0, 7);
     let y = aleatorio(0, 7);
     x = x *60;
     y = y *60;
     hoja.drawImage(cerdo.imagen, x, y);

    }

  }

}

var fondo = {
  
  url: "tile.png",
  cargaOk: false

}
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

function cargarFondo (){

  fondo.cargaOk=true;
  dibujarCerdo();

}
// hasta aqui llega la carga de la imagen

var vaca = {
  
  url: "vaca.png",
  cargaOk: false

}
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);


function cargarVaca (){

  vaca.cargaOk=true;
  dibujar();
  

}

var pollo = {
  
  url: "pollo.png",
  cargaOk: false

}
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);


function cargarPollo (){

  pollo.cargaOk=true;
  dibujar();
  

}

var cerdo = {
  
  url: "cerdo.png",
  cargaOk: false

}
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);


function cargarCerdo (){

  cerdo.cargaOk=true;
  dibujar();
  

}

function aleatorio(min, max){

  var resultado;

  resultado = Math.floor(Math.random()*(max - min +1))+ min;

  return resultado;

}