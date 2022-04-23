//Devuelve una promesa (lo muestra en un array) que se resuelve despues que todas las promesas 
//dadas se  hayan cumplido o rechazado

const promise1 = new Promise((resolve,reject) => reject("reject"));
const promise2 = new Promise((resolve,reject) => resolve("resolve"));
const promise3 = new Promise((resolve,reject) => resolve("resolve 1"));


Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));
