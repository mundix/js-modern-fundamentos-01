let juegos = ['Zelda', 'Mario', 'Metroid', 'Contra'];

console.log('Largo:', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log({ primero, ultimo });

juegos.forEach((elemento, index, arr) => {
    console.log({ elemento, index, arr });
});

let nuevaLongitud = juegos.push('F-zero'); //lo coloca de ultimo . 

console.log({ nuevaLongitud, juegos });

nuevaLongitud = juegos.unshift('Fire Emblem'); //Lo coloca de primero
console.log({ nuevaLongitud, juegos });

// para borrar el ultimo  elemento del arreglo 
let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });

// Quiero borrar uno en especifico
let pos = 1;
let juegoBorrados = juegos.splice(pos, 2); //el 2 es borra apartir de l posicion 1 cuantos elementos quiere borrar 
console.log(juegoBorrados, juegos);

console.log(juegos);
// en que lugar se encuentra metroid 
let metroidIndex = juegos.indexOf('Metroid');
console.log(metroidIndex);

