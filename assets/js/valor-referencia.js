// Valor por referencias 

let a =10;
let b = a;

a = 30;

console.log({a, b});

// Los valores primitivos pasan directametne su valor, y no afecta
// La variable a la cua se le pasa el valor de la otra

// Pero en los objetos es diferente, los objetos si pasan el valor por
//por referencia , y para cambiarlo se utiliza el operador spread 
// Ese operado, en functiones se llama rest , que se utilzia 
// Para obeternes los argumentos no declarados en el  ( ) de la fuciona
//Cuando la function es tipo landa o flecha

//Ex: de un objeto que se le asigna po refrencia sus valores 
// let juan = { nombre: 'Juab'};
// let ana  = juan;
// ana.nombre = 'Ana';
//Este ejemplo le asigna a la propiedad nombre el valor de 'Ana' y como es pro referencia
//Se le cambia al objeto juan a propiedad nombre, para 
// console.log({ana, juan});

let juan = { nombre: 'Juan'};
let ana  = { ...juan };
ana.nombre = 'Ana';

console.log({ana, juan});

// Ahora comos e resolveria usando una function flecha para cambiar el nombre
// const cambiarNombre = (persona) => {
//     persona.nombre = 'Tony';
//     return persona;
// }
const cambiarNombre = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona;
}



let peter = {nombre: 'Peter'};
let tony = cambiarNombre(peter);

console.log({peter, tony});

//Arreglos
const frutas = ['Manzanas', 'Pera', 'Piña'];

console.time('slice');
const otrasFrutas = frutas.slice(); //Esto devuevle un nuevo arrelgo rompiendo dicha relacion.
//Si no le manod argumentos, entocnes hace un nuevo arreglo  sinla relacion.
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');

otrasFrutas.push('Mango');

console.table({frutas, otrasFrutas});
