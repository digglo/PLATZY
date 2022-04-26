const fetchData = require('./APIsYPromesas');
let API = 'https://rickandmortyapi.com/api/character/';


//AQUI LO QUE SE LLAMA ES: 
//1) LLAMA LA CANTIDAD DE PERSONAJES
//2) LLAMADO DEL NOMBRE DEL PERSONAJE
//#) LLAMADA DEL NOMBRE DE LA DIMENSION
fetchData(API)

   //LOS RETURNS DE TODO ESTE CODIGO ME ESTAN TRAYENDO LA INFORMACION DE LA RUTA QUE SE LE INDICA
   //EN EL CASO DE LA LINEA 25 SE LLAMA EL NOMBRE DE LA DIMENSION GRACIAS A QUE EN LA LINEA
   //21 SE RETORNO LA INFORMACION DE LA RUTA DONDE ESTABA LA DIMENSION Y EL CONSOLE MUESTRA
   //LA INFORMACION ESPECIFICA QUE DESEAMOS VER, DE LA RUTA QUE SE RETORNA
  .then(data =>{
      //AQUI DATA ES LA INFORMACION QUE RECIBE
      //Aqui se esta contando la cantidad o el numero del personaje
     console.log(data.info.count); 

     //ESTE RETURN ES PARA LLAMAR LA INFORMACION DEL API EN ESTE CASO SE ESTA LLAMANDO EL ID
     //DEL PRIMER PERSONAJE
     return fetchData(`${API}${data.results[0].id}`);
  })
  //SE LLAMA LA INFORMACION QUE TENEMOS
  .then(data =>{
     console.log(data.name);
     return fetchData(data.origin.url);
  })
  .then(data => {
     console.log(data.dimension);
  })
  .catch(err => console.error(err));


  //FALLOS: PARA UTILIZARLO EN TODOS LOS COMUPTADORES (ANTIGUOS O NUEVOS) TOCA TRANSPILARLO
  //CON BABEL O HERRAMIENTAS PARECIDAS