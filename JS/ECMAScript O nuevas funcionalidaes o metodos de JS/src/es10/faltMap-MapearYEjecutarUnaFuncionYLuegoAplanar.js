//SIRVE PARA MAPEAR UN ARRAY, LUEGO EJECUTAR UNA FUNCION DE LA MISMO PARA LUEGO APLANARLA

let array = [1,2,3,4,5];

//returna el valor y el valor por 2
console.log(array.flatMap(value => [value, value *2]));