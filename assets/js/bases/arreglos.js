

// const arr = [1, 2, 3, 4];
// console.log(arr.length);

let videoGames = ['Mario 3', 'Mega Man', 'Contra', 'Chrono Trigger'];

console.log({videoGames});
console.log(videoGames[0]);

let arregloCosas = [
    true,
    123,
    'Edmundo',
    1 + 2,
    function(){},
    ()=> {}, //Landa Function o de flecha 
    {a:1}, 
    ['X', 'Mega Man', 'Zero', 'Dr. Light',[
        'Dr. Willy',
        'Woodman'
    ]],
];



// console.log({arregloCosas});
// Imprimir el valor de tru que esta en el arreglo y el indice del elemento que nefesito
//Imprime Dr. Light 
console.log(arregloCosas[arregloCosas.length-1][3]); //Dr. Light 
console.log(arregloCosas[arregloCosas.length-1][4][1]); //Woodman
 