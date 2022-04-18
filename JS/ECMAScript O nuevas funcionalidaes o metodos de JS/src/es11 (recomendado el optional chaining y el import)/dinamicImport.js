//Sirve para importar piesas de codigo de manera dinamica

const button = document.getElementById("btn");

button.addEventListener("click", async function (){
    const modulo = await import("./fileDinamicImport.js");
    modulo.hello();
});
