document.addEventListener("keydown", dibujarTeclado);

var cuadro = document.getElementById("area_dibujo");
var papel = cuadro.getContext("2d");
var x = 150;
var y = 150;
console.log(y);

function dibujarTeclado(evento){

    var teclas = {

       UP: 38,
       DOWN: 40,
       LEFT: 37,
       RIGHT: 39

    }

    let color = "blue";
    let movimiento = 10; 
    switch(evento.keyCode){

      case teclas.DOWN:
        dibujarLinea(color, x, y, x, y+movimiento, papel);
        y = y+movimiento
      break;
      case teclas.UP:
        dibujarLinea(color, x, y, x, y-movimiento, papel);
        y = y-movimiento
      break;  
      case teclas.LEFT:
        dibujarLinea(color, x, y, x-movimiento, y, papel);
        x = x-movimiento
      break;  
      case teclas.RIGHT:
        dibujarLinea(color, x, y, x+movimiento, y, papel);
        x = x+movimiento
      break;    

    }

}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){

    lienzo.beginPath(); //para empezar a dibujar o colocar el lapiz en el papel
    lienzo.lineWidth = 3; //para definir el ancho de la linea
    lienzo.strokeStyle = color; //para elegir el color de la linea
    lienzo.moveTo(xinicial,yinicial); //para ubicar desde donde comienza la linea, o la ubicacione de un punto
    lienzo.lineTo(xfinal,yfinal); //trazar hasta donde va la linea una linea
    lienzo.stroke(); // para dibujar la linea
    lienzo.closePath();//para levantar el lapiz

}