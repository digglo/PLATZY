//FUNCIONES FLECHA

//ANTES
const names = [
    {nombre : "camilo", age : 21},
    {nombre: "miguel", age : 20}
];

let listName = names.map(function(item){
     console.log(item.name);
});


//DESPUES

const names1 = [
    {nombre : "camilo", age : 21},
    {nombre: "miguel", age : 20}
];

let listName1 = names.map(item => console.log(item.name)
);

//OTRA MANETA

let listName2 = (name, age) =>{
    console.log(name);
}

let listName3 = item =>{
    console.log(names.name);
}