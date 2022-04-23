//PERMITE MANTENER UNA REFERENCIA DEBIL A OTRO OBJETO SIN EVITAR QUE EL OPBJETO SEA ELIMINADO
//POR EL GARBASH COLECTOR

class anyClass{
    constructor(elemento) {
      this.ref = new weakred(elemento);
    }
}