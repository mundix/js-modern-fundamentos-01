

const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];
let i = 0;
// while(i < carros.length) {
    // Otra forma , a menos qeu la posiicion sea undefined 
while( carros[i]) {
    if(i === 1) {
        //break
        i++;
        // Continue genera un ciclo a menos que la se altere la condicion 
        // Como con el i++;
        continue;
    }
    console.log(carros[i]);
    i ++;

}
let j = 0;
do {
    console.log(carros[j]);
    j++;
} while ( carros[j]);