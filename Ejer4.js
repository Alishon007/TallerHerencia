// Crea una clase Empleado con las propiedades nombre y salario, y un método obtenerDetalles() que retorne una cadena con la información del empleado. Luego, crea una clase Gerente que herede de Empleado y añada la propiedad departamento. En el constructor de Gerente, utiliza super para inicializar nombre y salario, y asigna departamento. Sobrescribe el método obtenerDetalles() para incluir el departamento en la información mostrada.

class Empleado{
    constructor(nombre, salario){
        this.nombre = nombre;
        this.salario = salario;
    }
    setnombre(in_nombre) {
        this.nombre = in_nombre;
    }
    getnombre() {
        return this.nombre;
    }
    
    setsalario(in_salario) {
        this.salario = in_salario;
    }
    getsalario() {
        return this.salario;
    }
    
    obtenerDetalles(){
        return this.nombre, this.salario;
    }
}
class Gerente extends Empleado{
    constructor(nombre, salario, departamento){
        super(nombre, salario);
        this.departamento = departamento; 
    }

    setdepartamento(in_departamento) {
        this.departamento = in_departamento;
    }
    getdepartamento() {
        return this.departamento;
    }
    
    obtenerDetalles(){
        return console.log( `${this.nombre} ${this.salario} ${this.departamento}`);
    }
}
let empleado1 = new Gerente('Alison', 100000, 'Dep.1');
let empleado2 = new Gerente('Valeria', 12, "Dep.12")
empleado1.obtenerDetalles()
console.log(empleado1)
empleado1.setnombre('Martinez')
empleado1.obtenerDetalles()
console.log(empleado1)