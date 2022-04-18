//SIRVE PARA DEVOLVER UNA MATRIZ CON CUALQUIER SUB MATRIZ APLANADA

// se creo una matriz con niveles
let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat());
console.log(array.flat(1));
console.log(array.flat(2));