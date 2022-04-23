//ACLARACION: LAS VARIABLES VAR, SI TIENEN VALORES; A ESTOS NO SE LE PUEDEN COLOCAR NUEVOS VALORES
//Ejemplo: let a = 'a'; 
//         let a = 'b';
//EL SISTEMA LO PERMITE PERO NO ES RECOMENDADO. CON LET NO SE PUEDE CAMBIAR EL VALOR COMO CON VAR

//Con var la variable existe siempre el codigo, no esta solo en un bloque o una funcion
var hello = 'hello';

//Las demas variables tambien estan en el scope global ya que no estan en un bloque de codigo o
//una funcion, si no que lo llegan a estar solo cuando las llaman
let world = 'world';
const helloWorld = 'hello world';


const anotheFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotheFunction();


//EJEMPLO DE FALLAS COMUNES O MALA PRACTICA

const helloWorld1 = () => {
    //Las variables siempre debe declararse. En este caso no se delcaro
    globalVar = 'im global';
}

helloWorld1();
//Despues de ejecutada la funcion el sistema permite llamar a la variable, pero es una mala practica
console.log(globalVar);


const anotheFunction1 = () =>{
    //Las variables no pueden tener doble asignacion, como en este caso
    var variableVar = globalVar1 = 'soy la polla';
}

anotheFunction1();
//Permite ver la variable, pero es una mala practica
console.log(variableVar);


