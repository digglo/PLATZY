//Una función de callback es una función que se pasa a otra función como un argumento, 
//que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

//Ejemplo:

function saludar(nombre) {
  alert('Hola ' + nombre);
}

function procesarEntradaUsuario(callback) {
  var nombre = prompt('Por favor ingresa tu nombre.');
  callback(nombre);
}

procesarEntradaUsuario(saludar);

//El ejemplo anterior es una callback sincrónica, ya que se ejecuta inmediatamente.