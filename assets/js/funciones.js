// Functions 

// function saludar1() {
//     console.log('Hola Mundo');
// }
function saludar(nombre) {
    // console.log(arguments); //hace referencia a todos los elementos del array
    // console.log('Hola ' + nombre);
    return [1, 2, 3, 4, 5];
    return 10; //si no tiene return devuelve undefined 
}

//funcion anonima
// const saludar2 = function() {
//     console.log('Hola Mundo');
// }
const saludar2 = function (nombre) {
    console.log('Hola ' + nombre);
}

// Funcion de flecha o landa function 
const saludarFlecha = () => {
    console.log('Hola Flecha')
}
// Cuando se envia un solo argumento , se pueden quitar los ( ) y dejar el nombre
// const saludarFlecha2 = nombre => { si solo si es un solo argumento
const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre);
}

const retornoSaludar = saludar('Fernando', 40, true, 'Costa Rica');
// console.log({ retornoSaludar });
// saludarFlecha();
// saludar2('Melisa')
// saludar1(); //Si no lo mando , el argumnto es undefine
// saludar1('Edmundo'); 
// saludar1('Edmundo', 40, true, 'Costa Rica');  //Probadno los arguments
// saludar2('Clemente'); 
// // BEneficio , como lo estoy asigando a una variabe no peudo reusarlo de otra forma
// //  Como una medida de seguridad. 
// saludar2();

function suma1(a, b){
    return a + b;
}
// const suma2 = (a , b) => {
//     return a + b;
// }
const suma2 = (a , b) => a + b;


console.log(suma2(2,2));

function getAleatorio(){
    return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log(getAleatorio());
console.log(getAleatorio2());