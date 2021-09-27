// const createPersona =  ( nombre, apellido ) => {
//     // Si los argumetnos son igules al return no es necesario ponerlo var:var ,
//     //Si no,  var y listo
//     return {
//         nombre,
//         apellido
//     }
// }
// Cuando se pone parentesis , que debo retornarlo en { } 
//Es par decirlq eu quier enviar todo el cuerpo del objeto. 
// Si no tiene  ( ) devuelv undefined 
const createPersona = (nombre, apellido) => ({ nombre, apellido });

const persona = createPersona('Edmunod', 'Pichardo');
console.log(persona);

function imprimeArgumentos() {
    console.log(arguments);
}

// Para imprimir lso argumetnos se usa el operar spread
// const imprimeArgumentos2 = (...args) => {
// despues del parametro spread no puede poenr otro valor
// const imprimeArgumentos2 = (...args, otrovalor) => {
// Si pongo el primer argumento , y luego el spread,
//Coge el primer valor  , el arg imprme todo los argumentos despyues 
//Del primer valor de los argumentos. por que se puso edad. 
const imprimeArgumentos2 = (edad, ...args) => {
    return args;
    // console.log(edad, args);
}

// const argumentos = imprimeArgumentos2(10, true, 'Edmundo', 'Hola');
const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, 'Edmundo', 'Hola');

// console.log(argumentos);
console.log({ casado, vivo, nombre, saludo });

const { apellido: nuevoApellido } = createPersona('Edmundo', 'Pichardo');
console.log(nuevoApellido);


const tony = {
    nombre: ' Tony Stark',
    codeName: 'Ironman',
    // edad: 40,
    vivo: false,
    trajes: ['Mark V', 'Mark I', 'Hulk Buster'],
    'ultima-pelicula': 'Avengers End Game',

}

const imprimePropiedades = ({nombre, codeName, edad = 15, vivo,trajes}) => {
    console.log({nombre});
    console.log({codeName});
    console.log({edad});
    console.log({vivo});
    console.log({trajes});
}

imprimePropiedades(tony);