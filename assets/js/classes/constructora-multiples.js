
class Persona {

    // static porObjeto( persona) {
        // Esto es util para crear instancias de diferentes formas, como sobrecarga de metodos en JAVA
    static porObjeto( {nombre, apellido, pais}) {
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    // Esto da un error por qeu solo debe haber un contructor por clase
    // constructor(obj) {

    // }

    getInfo() {
        console.log(`Info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }
}

const nombre1 = 'Melisa',
    apellido1 = 'Flores',
    pais1 = 'Honduras';

const fher = {
    nombre: 'Edmundo',
    apellido: 'Herrera',
    pais: 'Costa Rica'
}

const persona1 = new Persona(nombre1, apellido1, pais1);
// const persona2 = new Persona(fher);Esto no es permitido , una clase solo peude tner un constructor
const persona2 = Persona.porObjeto(fher);
persona1.getInfo();
persona2.getInfo();
