//DESTRUCTURACION DE ELEMENTOS

//ANTES
let persona = {
    nombre : "juan",
    año : 2011
   }
   
   console.log(persona.nombre, persona.año);
   
   //DESPUES
   let { nombre, año } = persona;
   console.log(nombre,año);