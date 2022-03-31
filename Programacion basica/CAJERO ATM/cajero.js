class billete {

  constructor(v,c){

     this.valor = v;
     this.cantidad = c;

  }

}

let caja = [];
let entregado = [];

caja.push(new billete(100,500));
caja.push(new billete(50,100));
caja.push(new billete(20,100));
caja.push(new billete(10,100));

let dinero ;
let div;
let papel;

let r = document.getElementById("resultado");

let b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

function entregarDinero(){

    let din = document.getElementById("dinero");
    dinero = parseInt(din.value);

   for(let bi of caja){

      if(dinero>0){

        div= Math.floor(dinero/bi.valor);

        if(div>bi.cantidad){

           papel = bi.cantidad;

        }else{

           papel = div;

        }

        entregado.push(new billete(bi.valor,papel));
        dinero = dinero-(bi.valor*papel);

      }

   }

   if(dinero> 0){

     r.innerHTML = "soy un cajero pobre y no tengo el dinero";

   }else{

      for(let e of entregado){

        r.innerHTML = r.innerHTML + e.cantidad + " Billete de $" + e.valor + " pesos <br />" ;

      }

   }

   console.log(entregado);

}