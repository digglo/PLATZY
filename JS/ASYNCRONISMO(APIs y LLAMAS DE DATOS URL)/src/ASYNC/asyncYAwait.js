const doSomethingAsync = () =>{
    return new Promise((resolve,reject) =>{
        (true)
        ? setTimeout(() => resolve('Do something async'),3000):
        reject(new Error('Test error')); 
    });
}

const doSomething = async () =>{
    const something = await doSomethingAsync();
    console.log(something);
}

//UNA MUESTRA AGRADABLE DELA EJECUCION
console.log('before');
doSomething();
console.log('After');


const anotherFunction = async ()=>{
    try{
        const something = await doSomethingAsync();
        console.log(something)
    }catch(error){
        console.log(error);
    }
}

console.log('before');
anotherFunction();
console.log('After');