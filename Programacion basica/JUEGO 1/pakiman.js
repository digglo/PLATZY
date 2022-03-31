let imagenes = [];
imagenes["vakanix"] = "vaca.png";
imagenes["pollosaurus"] = "pollo.png";
imagenes["cerderus"] = "cerdo.png";

let coleccion = [];
coleccion.push(new pakiman("vakanix",5000, 100, "tierra"));
coleccion.push(new pakiman("pollosaurus",2500, 10000, "fuego"));
coleccion.push(new pakiman("cerderus",2500, 10000, "fuego"));

for(let p of coleccion){

 p.mostrar();

}