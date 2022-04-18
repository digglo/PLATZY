//SIRVEN PARA UNIR CARACTERISTICAS DE UN OBJETO EN UN NUEVO OBJETO

const obj = {
    nombre : 'camilo',
    años : 21
}

const obj1 = {
    ...obj,
    country : 'colombia'
}

console.log(obj1);