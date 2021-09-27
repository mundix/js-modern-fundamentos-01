

const heroes = ['Batman', 'Superman','Mujer Maravilla', 'Aquaman'];

console.warn('For Tradicional');

for( let i =0; i < heroes.length ; i ++  ) {
    console.log(heroes[i]);
}

for( let i =0; heroes[i] ; i ++  ) {
    console.log(heroes[i]);
}

console.warn('For in');

for (let i in heroes) {
    console.log(heroes[i]);
}

console.warn('For of');

for(let hero of heroes) {
    console.log(hero);
}