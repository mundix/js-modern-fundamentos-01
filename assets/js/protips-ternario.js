//Retorna cual es el mayor de los dos
const elMayor = (a, b) => a > b ? a : b;

const tieneMebresia = (miembro) => (miembro) ? '2 Dolares' : '!0 Dolares';


console.log(elMayor(10, 15));
console.log(tieneMebresia(true));

const amigo = false;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    // (()=> 'Nick Fury')() //Funcion anonima autoinvocada
    elMayor(10, 15)
];

console.log(amigosArr);

// otro uso del operadir ternario con mas de 2 condiciones
const nota = 85; //A+, A B+
const grado = nota >= 95 ? 'A+' :
    nota > 90 ? 'A' :
        nota > 85 ? 'B+' :
            nota > 80 ? 'B' :
                nota > 75 ? 'C+' :
                    nota > 40 ? 'C' : 'F';

console.log({ nota, grado });