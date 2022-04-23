const person = () => {
    var saveName = "name";
    return{
        getName: () =>{
            return saveName;
        },
        setName: (name) => {
            return saveName = name;
        }
    }
}

newPerson = person();
console.log(newPerson.getName());
newPerson.setName("camilo");
console.log(newPerson.getName());