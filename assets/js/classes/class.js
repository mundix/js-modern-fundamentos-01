
// Como crear una clase moderna 
class Persona {
    // No se le ponen comma por que no es inicializaicon de variale , 
    // Toda las clases en javasscript viene de modo obligacorio como 'use strict'
    // Modo estricto de javascript 
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    // El consteructor siempre devuevle una instancia del objeto , y nuca undefined 
    // El unico metodo que hace esto
    constructor(nombre = 'Sin nombre', codigo = 'Sin codido', frase = 'Sin Frase') {

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
        // Si no retorna nada , retorna undefined 
    }

    miFrase() {
        // Si no ponemos el this, el buscara un metodo dentro de el escope miFrase
        this.quienSoy();
        // quienSoy(); //Se refuere al quien soyt de miFrase.quienSoy
        console.log(`${this.codigo} - ${this.frase}`);
        // function quienSoy() {
        //     console.log('hola mundo');
        // }
    }
}

const spiderman = new Persona('Peter Parker', 'Spider', 'Soy tu amigable vecino Spiderman');
const ironMan = new Persona('Tony Stark', 'Ironman', 'Yo soy ironman');

console.log(spiderman);
console.log(ironMan);

// spiderman.quienSoy();
spiderman.miFrase();
// ironMan.quienSoy();
ironMan.miFrase();