//Sirve para saber cuando ha terminado un llamado, y cuando iniciar una linea de codigo

const helloWorld =  () =>{
    return new Promise((resolve,reject) => {
      (true)
      ? setTimeout(() => resolve('hello world'),10000)
      : reject(new Error('test error'));
    });
}

helloWorld()
 //.then ejecuta
 .then(Response => console.log(Response))
 //.catch atrapa el error 
 .catch(error => console.log(error))
 //.finally finaliza la promesa 
.finally(() => console.log('finalizo'));