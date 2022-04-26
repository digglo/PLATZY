//ACLARACIONES


//XMLHttpRequest es la forma antigua de hacer llamados, como el profesor lo menciona usa ese y 
//no Fetch que es el actual, por que no conocemos aùn las promesas y fecth es con promesas, para 
//saber por que el profesor uso OPEN y todas esas funciones aqui està la forma de usar 
//XMLHttpRequest : https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest.

//CUANDO SE LLAMA EL URL Y SE PASA A JSON, SE PUEDE USAR CONSOLE.LOG PARA ANALIZAR LO QUE LLEGO Y 
//CON ESO REALIZAR EL LLAMADO DE LO QUE SE DESEA LLAMAR



//CON ESTO SE INSTANCIA EL LLAMADO DE UNA API
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let api = 'https://rickandmortyapi.com/api/character/';

//Esta funcion se va a llamar o dirigir a un URL y va a llamar otra funcion
function fetchData(url_api, callback){
 let xhttp = new XMLHttpRequest();

 //LA SIGUIENTE LINEA DE CODIGO SIRVE PARA LLAMAR O ABRIR UNA URL
 //El true sirve para que esta solicitud se maneje de manera asincrona
 xhttp.open('GET', url_api, true);

 //LA SIGUIENTE LINEA DE CODIGO SIRVE PARA GENERAR O ESCUCHAR LO QUE HACE ESA CONEXION
 xhttp.onreadystatechange = function(event){

     //readyState es el estado en el que se encuentra (QUE ES EJECUCION)
     //AQUI SE ESTA VALIDANDO SI SE ESTA EJECUTANDO EL LLAMADO DE LA URL O SE HA COMPLETADO Y 
     //ESO ES IGUAL A 4 QUE EL EL VALOR QUE BOTA EL SISTEMA
     if(xhttp.readyState === 4){

        //AQUI SE COLOCA OTRO IF PARA VALIDAR SI SI SALIO UN 200 (TODO SALIO BIEN) O 
        //500 (QUE ALGO FALLO) Y 400 (NO SE ENCONTRO NADA)
         if(xhttp.status === 200){

            //AQUI SE ESTA LLAMANDO UNA FUNCION ESTANDAR QUE VIENE CON NODE QUE SIRVE PARA
            //INDICAR QUE LO PRIMERO QUE MANDAMOS ES EL ERROR Y EL SEGUNDO EL RESULTADO DEL LLAMADO
             callback(null , JSON.parse );
             //la informacion que llega del URL es un JSON asi que se utiliza JSON.PARSE para 
             //transformarlo a codigo legible
         }else{

            //aqui se crea el codigo para el error por si no se ejecuta el llamado del API
            //SE ESTA CREANDO EL ERROR Y LO QUE DEBE MOSTRAR
             const error = new Error('ERROR', url_api);
             return callback(error, null);
         }
     }
 }
 //ESTE CODIGO NOS ENVIA LA SOLICITUD DE LA INFORMACION DEL URL
 xhttp.send();

}


//AQUI EL CALLBACK QUE DEBERIA IR SE UTILIZA PARA EJECURTAR LO QUE YA ANOTE ANTERIORMENTE DE
//LA FUNCION ESTANDAR DE NODE
fetchData(api, (error1, data1) => {
    // si error, matamos retornando un error
    if(error1) return console.error(error1);
    // luego buscamos en la api el id de Rick
    fetchData(api + data1.results[0].id, function (error2, data2) {
      // si error, matamos retornando un error
      if(error2) return console.error(error2);
      // por ultimo la consulta a la api que contiene su dimension
      fetchData(data2.origin.url, function (error3, data3) {
        // si error, matamos retornando un error
        if(error3) return console.error(error3);
        
        // mostramos los resultados :) 
        console.log(data1.info.count);
        console.log(data2.name);
        console.log(data3.dimension);
        
        // rutas de las peticiones en orden
        console.log(api);
        console.log(api + data1.results[0].id); 
        console.log(data2.origin.url); 
      
      });
    });
  });