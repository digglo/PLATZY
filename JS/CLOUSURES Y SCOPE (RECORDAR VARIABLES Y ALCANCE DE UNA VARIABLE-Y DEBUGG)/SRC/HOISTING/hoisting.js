a = 2;
var a;

console.log(a);


//nameDog('camilo');

//si escribo el codigo asi: const nameDog = () => {}. Al no tener la etiqueda funcion, se 
//ejecuta antes el llamado de la funcion que la creacion de la funcion por el compilado
// por lo que genera un error
function nameDog (name){
    console.log(name)
}

nameDog('camilo');