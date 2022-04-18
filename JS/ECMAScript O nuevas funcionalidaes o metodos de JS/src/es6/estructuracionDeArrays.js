//OPERADOR DE PROPAGACION O TAMBIEN ESTRUCTUACION DE ARRAYS

//PERMITE EXPANDIR VARIOS ELEMENTOS O LISTARLOS ;
//EL ARRAY TIENE QUE TENER 3 VALORES PARA QUE LOS LISTE
let team1 = ['oscar', 'julian','jaja'];
let team2 =['ricardo', 'valeria', 'ieiei'];

let equipos = ['camilo', ...team1, ...team2];

console.log(equipos);