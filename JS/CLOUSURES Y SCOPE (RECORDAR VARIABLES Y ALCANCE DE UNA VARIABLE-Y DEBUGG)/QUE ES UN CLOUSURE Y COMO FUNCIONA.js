//ACLARACION=  UN CLOSURE SIRVE PARA LOS CASOS EN DONDE SE TIENEN QUE EJECUTAR UNA FUNCION CON 
//DIFERENTES VALORES QUE SE VAN AGREGANDO, EN DONDE UN VALOR VA A CAMBIAR "AUMENTE, DISMINUYA, 
//SE MULTIPLIQUE O SE DIVIDA" DE SU VALOR ORIGINAL(ejemplo, lo que paso con canvas)

//ACLARACION2= CLOSURE SIRVE CUANDO SE NECESITA UNA MEMORIA O RECORDAR UN VALOR



//Una clausura permite acceder al ámbito de una función exterior desde una función interior. 
//En JavaScript, las clausuras se crean cada vez que una función es creada.

//LINK DE MEJOR EXPLICACION SOBRE QUE ES
//https://platzi.com/comentario/919760/

//EJEMPLO

const moneyBoc = (coins) => {
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`CANTIDA DE MONEDAS: ${saveCoins}`);
}

moneyBoc(5);
moneyBoc(10);

//AQUI EL ERROR SE DEBE A QUE NO ESTA SUMANDO EL VALOR LA CANTIDAD DE MONEDAS QUE SE AGREGARON, 
//SI NO QUE SOLO ESTA MOSTRANDO EL VALOR QUE ACABO DE AGREGAR


//CORRECCION
const moneyBox = () => {
    var saveCoins1 = 0;
    const countCoins = (coins1) =>{
       saveCoins1 += coins1;
       console.log(`cantidad almacenada: ${saveCoins1}`);
    }
    return countCoins;
}

//para ejecutar un clousure primero se ejecuta la funcion asociandola a una variable, y luego a
//la variable se le agregan los valores
let cantidad = moneyBox();

cantidad(5);
cantidad(10);