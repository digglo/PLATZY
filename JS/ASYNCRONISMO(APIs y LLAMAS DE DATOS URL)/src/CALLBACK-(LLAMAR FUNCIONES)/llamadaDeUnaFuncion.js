function suma (n1, n2){
  return n1+n2;
}

//EL CALLBACK AQUI ES LO MISMO QUE LLAMAR SUMA, SOLO QUE EN VEZ DE COLOCAR SUMA SE PREFIE COLOCAR
//CALLBACK
function cal(n1,n2, callback){
    return callback(n1,n2);
}

console.log(cal(3,2, suma));


function fecha (){
  console.log(new Date);
  setTimeout(()=>{
  let date = new Date;
  callback(Date);
  },3000);
}


function printData(dateNow){
  console.log(dateNow);
}

fecha(printData);