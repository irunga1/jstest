class Persona {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    cheer(){
        console.log(`Hola mi nombre es ${this.name} y tengo ${this.age}`);
    }
}
export default Persona;