
let a = 5;

if (a > 10) {
    console.log('A es mayor a 10');
}

console.log('Fin de programa');

let hoy = new Date();
let dia = hoy.getDay();

console.log(dia);

if (dia === 0) {
    console.log('Domingo');
} else if (dia === 1) {
    console.log('Lunes');
} else if (dia === 2) {
    console.log('Martes');
} else {
    console.log('No es lunes, martes o domingo ...');
}

// Ejercicio crear un objeto con los dias de la seman pasandole un 
//index de variable 
dia = 3;

// const diasLetras = {
//     0: 'domingo',
//     2: 'lunes', 
//     3: 'martes', 
//     4: 'miércoles', 
//     5: 'jueves', 
//     6: 'viernes', 
//     7: 'sábado',
// }

// console.log( diasLetras[dia] || 'Día no definido');

// Si quiero usarlo tipo swithc o if else para retonar algo , ene ste caso una funcion de flerha
const diasLetras = {
    0: () => 'domingo - 1',
    2: () => 'lunes - 2', 
    3: () => 'martes - 3', 
    4: () => 'miércoles -4', 
    5: () => 'jueves - 5', 
    6: () => 'viernes -6', 
    7: () => 'sábado - 7',
}
// Entonces sel pone al final un  () para que ejecute la funcion, si no , solo devuelve 
//la funcion misma.
console.log( diasLetras[dia]() || 'Día no definido');