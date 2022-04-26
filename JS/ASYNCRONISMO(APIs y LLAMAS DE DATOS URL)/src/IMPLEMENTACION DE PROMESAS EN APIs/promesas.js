const somethingWillHappen = () => {
    return new Promise((resolve, reject) =>{
        //si se cambia a true se cumplio la promesa
        //si se coloca false no trajo nada la promesa
        if(true) {
            resolve('hey');
        }else{
            reject('ups');
        }
    })
}
 
somethingWillHappen()
 .then(response => console.log(response))
 .catch(err => console.error(err));



//ES MEJOR UTILIZAR ESTA POR QUE  EL UTILIZAR EL NEW ERROR NOS MUESTRA LA UBICACION Y LA RUTA DEL
//ERROR
const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) =>{
        if(true){
            setTimeout(()=>{
               resolve('true')
            },3000);
        }else{
            const error = new Error('paila');
            reject(error);
        }

    })
}

somethingWillHappen2()
  .then(response => console.log(response))
  .catch(err => console.error(err));




//PARA EJECUTAR VARIAS PROMESAS AL MISMO TIEMPO SE UTILIZA:

Promise.all([somethingWillHappen(),somethingWillHappen2()])
.then(response => console.log('Array de resultados ',response))
.catch(err => console.error('Array de errores ',err));