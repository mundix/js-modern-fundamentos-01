
// Como crear una clase moderna 
class Persona {
    // No se le ponen comma por que no es inicializaicon de variale , 
    // Toda las clases en javasscript viene de modo obligacorio como 'use strict'
    // Modo estricto de javascript 
    nombre = '';
    codigo = '';
    frase = '';

    // El consteructor siempre devuevle una instancia del objeto , y nuca undefined 
    // El unico metodo que hace esto
    constructor(nombre = 'Sin nombre', codigo = 'Sin codido', frase = 'Sin Frase') {

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }
}

const spiderman = new Persona('Peter Parker', 'Spider', 'Soy tu amigable vecino Spiderman');
const ironMane = new Persona('Tony Stark', 'Ironman', 'Yo soy ironman');
console.log(spiderman);