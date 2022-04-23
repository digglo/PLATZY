const fruits = () => {
    if(true){
        var fruit1 = 'manaza';
        var fruit2 = 'banano';
        var fruit3 = 'pera';
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();

//Se puede acceder a la variables ya que las variables son var y var puede ser accedido en todos
//los elementos de la funcion


const fruits1 = () => {
    if(true){
        var fruit1 = 'manaza';
        let fruit2 = 'banano';
        const fruit3 = 'pera';
        //console.log(fruit2);
        //console.log(fruit3);
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits1();

//No se puede acceder a todas las variable ya que las variables let y const, no pueden ser 
//accedidas desde todos los elementos de la funcion, si no solo dentro del bloque de codigo

//si se desea visualizar todas las variables, la etiqueta console.log tiene que estar dentro del if





//EJEMPLO2

let x = 1;
{
let x = 2;
console.log(x);
}
console.log(x);

//Muestra los dos valores por que el x que vale 1 estan en el scope global asi que va a mostrar
//en todas partes, en cambio en let solo cambiar el valor de x a 2 en un bloque de codigo
//y ese cambio solo existe en ese bloque de codigo






//EJEMPLO 3
const anotherFunction = () => {
  for (let i = 0;i<10;i++){
      setTimeout(() => {
        console.log(i)
      },1000);
  }
}

anotherFunction();

//Muestra el ultimo valor por que esta accediendo al ultima valor que recorre el for por que el 
//valor mientras se cumple el setTimeOut llega a 10, y luego i toma el valor de 10 por estar 
//definido como var (si se coloca var para definir la variable)
