//CLASES

class caculadora {
    constructor (){
        this.valueA = 0;
        this.valueB = 0;
    }
    sumar(valueA,valueB){
        this.valueA =valueA;
        this.valueB =valueB;
        return this.result = valueA + valueB;
    }
}

const cal = new caculadora();

console.log(cal.sumar(2,2));