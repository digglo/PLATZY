var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;

var boton = document.getElementById("boton");
var valor_linea = document.getElementById("valor_linea");

boton.addEventListener("click", dibujoPorCLick);

//var linea = 300;
//var l = 0;

//var yi, xf;

//while(l<linea){

    //yi = 10 * l;
    //xf = 10 * (l+1);

    //dibujarLinea("green", 0, yi, xf, 300);
    //dibujarLinea("green", yi, 0, 300, xf);
    //dibujarLinea("green", 300, yi, xf, 0);
    //dibujarLinea("green", yi, 300, 0, xf);

    //l++;

//}

//lienzo.beginPath(); //para empezar a dibujar o colocar el lapiz en el papel
//lienzo.strokeStyle = "black"; //para elegir el color de la linea
//lienzo.moveTo(100,100); //para ubicar desde donde comienza la linea, o la ubicacione de un punto
//lienzo.lineTo(200,200); //trazar hasta donde va la linea una linea
//lienzo.stroke(); // para dibujar la linea
//lienzo.closePath();//para levantar el lapiz

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){

    lienzo.beginPath(); //para empezar a dibujar o colocar el lapiz en el papel
    lienzo.strokeStyle = color; //para elegir el color de la linea
    lienzo.moveTo(xinicial,yinicial); //para ubicar desde donde comienza la linea, o la ubicacione de un punto
    lienzo.lineTo(xfinal,yfinal); //trazar hasta donde va la linea una linea
    lienzo.stroke(); // para dibujar la linea
    lienzo.closePath();//para levantar el lapiz

}

function dibujoPorCLick(){

    var valor = parseInt(valor_linea.value);

    var linea = valor;
    var espacio = ancho/linea;
    var l = 0;

    var yi, xf;

    while(l<linea){

    yi = espacio * l;
    xf = espacio * (l+1);

    dibujarLinea("green", 0, yi, xf, 300);
    dibujarLinea("green", yi, 0, 300, xf);
    dibujarLinea("green", 300, yi, xf, 0);
    dibujarLinea("green", yi, 300, 0, xf);

    l++;

}

}