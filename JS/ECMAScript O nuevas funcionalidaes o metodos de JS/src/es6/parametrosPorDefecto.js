//CARACTERISTICAS ANAMIDAS EN ECMASCRIPT6




//PARAMETROS POR DEFECTO

//ANTES
function newFunction(name, age, country){
    var name = name || "oscar";
    var age = age || 21;
    var country = country || "colombia";
    console.log(name, age, country);
}

newFunction();

//DESPUES
function newFunction1(name1 = "cristian", age1 = 21, country1 = "japon"){
    console.log(name1, age1, country1);
}

newFunction1();