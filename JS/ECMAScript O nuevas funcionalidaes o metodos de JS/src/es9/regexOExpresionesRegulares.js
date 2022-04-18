//COMO AGRUPAR BLOQUES DE REGEX

//REGEX (EXPRESIONES REGULARES)

//FECHA QUE VA A TENER DIA, MES QUE VA A TENER DEL MES 0 AL 9 Y LA CANTIDAD DE VALORES QUE SON 2 Y EL AÑO
//CON 4 VALORES MAXIMOS
const regexData = /([0-9]{4})-([0-9]{2})-([0-9][2])/
//match se utilizo para agregar o ejecutar una fecha teniendo encuenta la expreison regular
const match = regexData.exec('2019-04-20');
//los datos de la fecha quedan guardados de modo de array y por eso se atraen de esa manera
const año = match[1]
const mes = match[2]
const dia = match[3]

console.log(match);