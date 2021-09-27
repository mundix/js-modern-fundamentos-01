/**
 * Dias de Seman abrimos a las 11
 * pero lo fines de semana abriimoas a las 9
 */

//Entra a un sitio web , para consultar si esta abierto hoy ...
const dia = 1; // 0: Domingo ..1: Lunes ... 
const horaActual = 10;

let horaApertura;
let mensaje; //Esta abierto, esta cerrado, hoy abrimos a las XX

// if (dia === 0 || dia === 6) {
//     console.log("Fin de semana");
//     horaApertura = 9;
// } else {
//     console.log("Dia de semana");
//     horaApertura = 11;
// }
// if (dia === 0 || dia === 6) {
//Esta evaluacion returna bool si exisete true o false si no
// if ([0, 6].includes(dia)) {
//     console.log("Fin de semana");
//     horaApertura = 9;
// } else {
//     console.log("Dia de semana");
//     horaApertura = 11;
// }
// if (horaActual >= horaApertura) {
//     mensaje = 'Está Abierto';
// } else {
//     mensaje = `Està cerrado, hoy abrimos a las ${horaApertura}`;
// }

//usando el operador ternario 
horaApertura = ([0,6].includes(dia)) ? 9 : 11;
mensaje = (horaActual >= horaApertura) ? 'Está abierto' : `Està cerrado, hoy abrimos a las ${horaApertura}`;


console.log({ horaApertura, mensaje });