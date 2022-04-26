const fetchData = require('./APIsYPromesas');

//API ESTA EN MAYUSCULA POR QUE ES UNA CONVENCION O REGLA PAR INDICAS QUE NUNCA VA A CAMBIAR
const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction =  async (url_api) =>{
    try{
        //AQUI SE CREAN 3 CONSTANTES DE LOS 3 ELEMENTOS QUE VAMOS A LLAMAR

        //AQUI SE LLAMA LA DATA GENERAL DE LA API
        const data = await fetchData(url_api);
        //AQUI SOLO SE LLAMA EL NUMERO O INFORMACION DEL PERSONAJE EN GENERAL
        const personaje = await fetchData(`${API}${data.results[0].id}`);
        //AQUI SOLO SE LLAMA LA DIMENSION DEL PERSONAJE EN GENERAL
        const dimension = await fetchData(personaje.origin.url);

        //AQUI SE LLAMA AHORA SI LA INFORMACION ESPEFICIA QUE SE DESEA TRAER
        console.log(data.info.count);
        console.log(personaje.name);
        console.log(dimension.dimension);

    }catch(error){
        console.error(new Error(error));
    }
}

anotherFunction(API);

//DESVENTAJAS: TOCA ESPERAR POR CADA UNO DE LOS LLAMADAS
//             AL IGUAL DE LAS PROMESAS TOCA TRANSIPLAR CON HERRAMIENTAS COMO BALES