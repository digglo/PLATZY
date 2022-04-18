//GENERATOR O GENERADOR

//Es una funcion especial que retorna valores segun el algoritmo definido
function* helloWorld (){
    if(true){
        // YIELD PERMITE RETORNAR ALGO
        yield 'hello, ';
    }
    if(true){
        yield 'world';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);

console.log(generatorHello.next().value);
