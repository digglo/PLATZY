//PROMISE ANY
//El método Promise.any recibe un array de promesas y se resuelve tan pronto como una de 
//ellas haya sido resuelta. El valor del resultado va a ser esa primera promesa resuelta.

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1,promise2,promise3])
 .then(Response => console.log(Response));
