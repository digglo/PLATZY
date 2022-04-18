//EXTRA LAS PROPIEDADES DE UN OBJETO QUE NO SE HA CONSTRUIDO
const obj = {
    name : 'camilo',
    age : 21,
    country : 'colombia',
}

//ESTRAE EL ELEMENTO NOMBRADO Y LO DEMAS LO ENCAPSULA (TRAEL EL NOMBRE Y LO DEMAS LO METE EN CORCHETES)
let {name, ...all} = obj;

console.log(name, all);