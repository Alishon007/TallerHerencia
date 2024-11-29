// Ejercicio 1: Crea una clase Animal con las propiedades nombre y edad, y un método hacerSonido() que imprima "El animal hace un sonido.". Luego, crea una clase Perro que herede de Animal y sobrescriba el método hacerSonido() para imprimir "El perro ladra: ¡Guau!".

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
    
    getedad() {
        return this.edad;
    }
    setedad(in_edad) {
        this.edad = in_edad;
    }
    hacerSonido(){
        console.log(`El animal hace un sonido `)
    }
}
class Perro extends Animal{
    hacerSonido(){
        console.log(`El perro ladra: ¡Guau! `)
    }
}

let animal1 = new Perro('Tommy', '3')
animal1.hacerSonido()
console.log(animal1)
animal1.setedad('5')
console.log(animal1)