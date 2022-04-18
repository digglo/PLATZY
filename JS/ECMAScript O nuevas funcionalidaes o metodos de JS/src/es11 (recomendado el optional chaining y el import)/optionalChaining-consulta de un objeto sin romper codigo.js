//SIRVE PARA CONSULTAR EN UN ARRAY O EN UN OBJETO, Y QUE SI NO SE PUEDE REALIZAR LA CONSULTA
//NO ROMPA EL CODIGO, SI NO QUE BOTE UNDEFINED

//SE CREO UN OBJETO, PENSANDO QUE LUEGO SE VA ALLENAR CON INFORMACION QUE VENGA DEL SERVIDOR
const user = {};

//SI NO SE COLOCA EL ? EL CODIGO SE ROMPE. EL ? INDICA QUE CONSULTE EN ESAS CASILLAS Y SI NO HAY
//NADA BOTA UNDENINED
console.log(user.profile.email);

console.log(user?.profile?.email);

//aqui la condicion es que se valida si hay un email, si no hay el ? valida si en user hay un
//profile y si lo hay ejecuta el codigo y muestra el email
if(user?.profile?.email) {
    console.log('email')
} else{
    console.log('fail')
}