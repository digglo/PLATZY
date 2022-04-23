
//NOS PERMITE ACCECER EN UN BLOQUE DE CODIGO O UNA FUNCION, Y SOLO SE PUEDE LLAMAR A LA VARIABLE
//EN ESTA ESTRUCTURA

const helloWorld = () => {
    const hello = 'hello world';
    console.log(hello);
}

helloWorld();

//Esto bota un error ya que al no ser una variable global o VAR, solo existe dentro de la funcion
//si se llama fuera de esta como en este caso; la variable no existira
console.log(hello);


var scope = 'i am global';

const functionScope = () => {
    var scope = 'i am a local';
    const func = () =>{
        return scope;
    }
    console.log(func());
}

functionScope();
console.log(scope);