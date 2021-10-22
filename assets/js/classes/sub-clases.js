class Persona {
    // **** Static properties and Methods ****
    static _conteo = 0; 
    
    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    // Metodos static 
    static message() {
        console.log(this.nombre); //undefined 
        console.log('Hola  todos soy un metodo estatico');
    }

    // **** PROPERTIES OR VARIABLES OF THE CLASS ****
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    // **** CONSTRUCTOR ****
    constructor(nombre = 'Sin nombre', codigo = 'Sin codido', frase = 'Sin Frase') {

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    //  ***** SET y GET  *****
    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favorita es ${this.comida}`;
    }

    // **** METHODS  ****
    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo} - ${this.frase}`);
    }
}

// Herencia , como se exteiende y como se accesa
class Heroe extends Persona{

    clan = 'sin clan';
    // Constructor de Hero
    constructor(nombre, codigo, frase) {
        // ESto puede hacerse sin probelma por que no usa this
        let a = 10;
        let b = a + 10;
        super(nombre, codigo, frase); //Super hace referecnia a la clase que hereda 
        //El super debe llamarse antes de acceder a cualqueir propiedad que use this
        this.clan = 'Los Avengers'; 
    }
    
    quienSoy() {
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quienSoy();
    }
}

// const spiderman = new Persona('Peter Parker', 'Spider', 'Soy tu amigable vecino Spiderman');
const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
spiderman.quienSoy();
console.log(spiderman);

