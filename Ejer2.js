// Ejercicio 2: Amplía el ejercicio anterior. En la clase Perro, añade una propiedad adicional raza. Utiliza super en el constructor de Perro para inicializar las propiedades heredadas de Animal.

class Animal{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
        
    }
    getnombre() {
        return this.nombre;
    }
    setnombre(in_nombre) {
        this.nombre = in_nombre;
    }
    
    getEdad() {
        return this.edad;
    }
    setEdad(in_edad) {
        this.edad = in_edad;
    }
    hacerSonido(){
        console.log(`El animal hace un sonido `)
    }
}
class Perro extends Animal{
    constructor(nombre, edad, raza){
        super(nombre, edad);
        this.raza = raza
        
    }
    getraza() {
        return this.raza;
    }
    setraza(in_raza) {
        this.raza = in_raza;
    }
    hacerSonido(){
        super.hacerSonido();
        console.log(`El perro ladra: ¡Guau! `)
    }
}

let animal1 = new Perro('Tommy', '3', 'PitBull')
animal1.hacerSonido()
console.log(animal1)
animal1.setEdad('5')
console.log(animal1)