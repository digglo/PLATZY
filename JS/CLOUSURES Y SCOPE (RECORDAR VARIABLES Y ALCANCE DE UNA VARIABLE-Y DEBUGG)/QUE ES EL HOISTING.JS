//Eleva las declaraciones, esto pasa en el momento en que se compila nuestro código antes de ser 
//interpretado por el navegador.

//De esta forma podemos asignar nuestros valores o acceder a un valor que previamente no ha sido 
//declarado dentro de esta estructura.

//EJEMPLO

//VAR NAME; ESTO HACE EL HOSTING ELEVA LAS VARIABLES VAR POR SOBRE ENCIMA DEL CODIGO
console.log(name);
var name = 'camilo';




//ACLARACION EL HOSTING SOLO SE GENERA EN LAS DECLARACIONES Y NO EN LAS INICIALIZACIONES, OSEA
//SOLO AFECTA A LAS VARIABLES Y NO AL RESTO DEL CODIGO

//nameDog('camilo');

//si escribo el codigo asi: const nameDog = () => {}. Al no tener la etiqueda funcion, se 
//ejecuta antes el llamado de la funcion que la creacion de la funcion por el compilado
// por lo que genera un error
function nameDog (name){
    console.log(name)
}

nameDog('camilo');