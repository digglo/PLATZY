// el # lo vuelve un metodo privado

class message {
    #show(val){
        console.log(val);
    };
    get #add(val){
        
    }
}

const message1 = new message();

message.show("hola");