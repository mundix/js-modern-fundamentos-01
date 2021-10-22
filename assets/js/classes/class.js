
// Como crear una clase moderna 
class Persona {
    // No se le ponen comma por que no es inicializaicon de variale , 
    // Toda las clases en javasscript viene de modo obligacorio como 'use strict'
    // Modo estricto de javascript 
    // PROPERTIES OR VARIABLES OF THE CLASS
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    // El consteructor siempre devuevle una instancia del objeto , y nuca undefined 
    // El unico metodo que hace esto
    // CONSTRUCTOR
    constructor(nombre = 'Sin nombre', codigo = 'Sin codido', frase = 'Sin Frase') {

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }

    // SET y GET 
    // Los set se les pone set en ves de function 
    // El set no puede tener le mismo nombre de la propiedad a la cual queremos referirnos 
    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favorita es ${this.comida}`;
        // Por eso no se puede llamar igual , para que no entre en loop infinitio
        // return `La comida favorita es ${this.getComidaFavorita}`;
    }


    // METHODS 

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

// console.log(ironMan);

// spiderman.quienSoy();
spiderman.miFrase();
// cuadno se llama el set , se ve como un cubito azul que indica que no es un metodos, 
// Es como una propiedad para asignar
// Y ahora sale dentro del prototype 
spiderman.setComidaFavorita = 'Pie de la tia may';
// spiderman.namesis = 'Duende Verde'; //Le asigna esta propiedad sin haberse declarado 
console.log(spiderman.getComidaFavorita);
console.log(spiderman);

// ironMan.quienSoy();
// ironMan.miFrase();