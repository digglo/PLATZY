const buildCount = (i) => {
    let count = i;
    const displayCount = () =>  {
        console.log(count++);
    }
    //Siempre que haya un CLOSURE, la funcion interna se retorna
    return displayCount;
}

const myCount = buildCount(1);

myCount();
myCount();
myCount();


const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount();
