const fruits = ()=> {
    var fruta = 'apple';
    console.log(fruta);
}

fruits();

console.log(fruta);

const anotherFunction = () =>{
    var x = 1;
    var x = 2;
    //Genera una fallo por que las variables declaradas con let o const, ya que no puede vambiar 
    //sus valores
    let y = 1;
    let y = 2;
    console.log(x);
    console,log(y);
}

anotherFunction();