const helloPromise = () => {
    //RESUELVA O RECHACE
return new Promise ((resolve , reject) =>{
if(true){
resolve("hey");
}else{
reject('ups');
}
});
}

helloPromise()
.then(response => console.log(response))
.then(() => console.log('hi'))
.then(error => console.log(error));