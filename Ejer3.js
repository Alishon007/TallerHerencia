// Ejercicio 3: crea una función constructora Vehiculo con la propiedad marca y un método arrancar() que imprima "El vehículo ha arrancado.". Luego, crea una función constructora Coche que herede de Vehiculo y añada la propiedad modelo. Añade un método mostrarInfo() que imprima la marca y el modelo del coche.

// function Vehiculo(marca){
//     this.marca = marca;

//     arrancar=function(){
//         console.log(`El vehiculo ha arrancado`)
//     }
// }
// function Coche extends Vehiculo(){

// }

class Vehiculo{
    constructor(marca){
        this.marca = marca;
        
    }
    getmarca() {
        return this.marca;
    }
    setmarca(in_marca) {
        this.marca = in_marca;
    }
    arrancar(){
        console.log('El vehiculo ha arrancado ')
    }
}
class Coche extends Vehiculo{
    constructor(marca, modelo){
        super(marca);
        this.modelo = modelo;
    }
    getmodelo() {
        return this.modelo;
    }
    setmodelo(in_modelo) {
        this.modelo = in_modelo;
    }
    mostrarInfo(){
        console.log(`Marca: ${this.marca}, modelo:  ${this.modelo}`)
    }
}
let vehiculo1= new Coche('Ford', '2002')
vehiculo1.mostrarInfo();