//ACLARACION: SE SIGUE UTILIZANDO EL XMLHTTPREQUEST POR QUE ES LO QUE LLAMA A LA FUNCION
//LA PROMESA AYUDA A TRAER LA INFORMACION O MOSTRAR EL ERROR, COMO EN LA ANTERIOE EXPLICACION

let xmlhttprequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url_api) =>{
    return new Promise((resolve, reject) =>{
        const xhttp = new xmlhttprequest();
        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = (() => {
            if(xhttp.readyState === 4){
                //AQUI SE QUITA EL IF POR LA EJECUCION TERNARIA YA QUE AQUI NO SE UTILIZA
                (xhttp.status === 200) 
                ? resolve(JSON.parse(xhttp.responseText))
                : reject(new Error('Error', url_api));
            }
        });

        xhttp.send();
    });
}


//Para terminar el llamado de utiliza la siguiente linea de codigo
//SE UTILIZA MODULE.EXPORT POR QUE UTILIZAMOS NODE Y NODE NO UTILIZA LA SINTAXIS DE IMPORT O 
//EXPORT DEFAULT
module.exports = fetchData;