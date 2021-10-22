// SINGLETON Esto me permite declarar una uncia instancia 

// Un nombre cualqueira de la clase 
class Singleton {

    static instancia; //null, undefined ? 

    nombre = '';

    constructor(nombre = '') {
        // console.log(Singleton.instancia); //indefined
        // if ? 
        // El this hace referencia a esta instancia de l calse
        // Has lo opuesto de true, da falso, para un undefined , no es obligaorio
        if(!!Singleton.instancia) {
            // Si ya existe una instancia has un return de Singleton de la instancia
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;
    }

}

// Tiodas apuntan al mismo espacio en memoria y al mioskmo objeto , en el mismo lugar 
const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('BlackPanther');

console.log(`Nombre en la instancia1 es: ${instancia1.nombre}`);
console.log(`Nombre en la instancia2 es: ${instancia2.nombre}`);
console.log(`Nombre en la instancia3 es: ${instancia3.nombre}`);