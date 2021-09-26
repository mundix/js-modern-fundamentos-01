const personaje = { 
    nombre: ' Tony Stark',
    codeName: 'Ironman',
    edad:40,
    vivo: false,
    coords: {
        lat: 34.1564,
        lng: 16.545,
    },
    trajes: [ 'Mark V', 'Mark I','Hulk Buster'],
    'ultima-pelicula': 'Avengers End Game',
    direccion: {
        zip: "10880, 90265",
        ubicacion: 'Malibu, California'
    }
}

console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);

console.log('Latitud', personaje.coords.lat);
console.log('Longitud', personaje.coords.lng);

const totalTrajes = personaje.trajes.length;
console.log('# de Trajes', totalTrajes);
console.log('Ultimo Trajes', personaje.trajes[totalTrajes-1]);

const x = 'vivo'; //Mando un string a objeto dentro de [corchete]
console.log('Vivo', personaje[x]);
console.log('Ultima Pelicula', personaje['ultima-pelicula']);

//Mas Detalles
//Como borrar una propiedad 
//Con poner la palabra reservada delete hacia la propiedad
personaje.edad = null;
// console.log(personaje)
delete personaje.edad;
console.log(personaje)

//Si quiero agregar propiedad
personaje.casado = true;

// Como podemo convertir un objeto en un array 
const entriesPares = Object.entries( personaje);
console.log(entriesPares);

// Si cambio el tipo de variable a const para que nos e modifique , se puede modificar las propiedades, 
//solo cuando se asigna un nuevo valor de cualqueir tipo se bloquea. 

// Para evitar que modifiquen el valor de las propiedades se usa Object.freeze
Object.freeze(personaje);
personaje.dinero = 1000000000;
console.log(personaje);

const propiedades = Object.getOwnPropertyNames( personaje);
const valores = Object.values( personaje);
console.log({valores});