//PROMESA

const helloWorld = () => {
    return new Promise((resolve, reject) =>{
       (true)
       ?setTimeout(() => resolve('hello world'),3000)
       : reject(new error('fallo no dijo hello world'))
    });
}


//ASYNCAWAY

const helloAsinc = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsinc();


//FORMA DE TRABAJAR CON ASYNCAWAY

const anotherFunction = async () => {
  //SE UTILIZA EL TRY CATCH, SIRVE PARA ATRAPAR LOS ERRORES
  try{
      const hello = await helloWorld();
      console.log(hello);
  }catch(error){
      console.log(error);
  }
};

anotherFunction();