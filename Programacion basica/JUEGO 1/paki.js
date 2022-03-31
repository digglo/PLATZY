class pakiman {

    constructor(n, A, V, T){
   
      this.imagen = new Image();
      this.tipo = T;
      this.nombre = n;
      this.ataque = A;
      this.vida = V;
      this.imagen.src = imagenes[this.nombre];
   
    }
    hablar (){
   
     alert(this.nombre);
   
    }
    mostrar (){
   
     document.body.appendChild(this.imagen);
     document.write("<br /> <strong>" + this.nombre + "</strong> <br />");
     document.write("TIPO: " + this.tipo + "<br />");
     document.write("TIPO: " + this.vida + "<hr />");
   
    }
   
   }