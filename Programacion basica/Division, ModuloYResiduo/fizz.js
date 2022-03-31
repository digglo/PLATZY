let numero = 100;
let divisible = false;

for(var i =0; i<=1000;i++){

  divisible = false;
  if(i % 3 == 0){

    document.write("fizz");
    divisible = true;

  }if(i % 5 == 0){

    document.write("buzz");
    divisible = true;

  }if(i % 3 !== 0 && i % 5 !== 0){

    document.write(i + "<br />");

  }

}