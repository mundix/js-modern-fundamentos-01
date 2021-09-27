

const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.log('AND');
console.log(true && false);
console.log(true && !false);

console.log('===== && =====');
regresaFalse() && regresaTrue();

console.warn("OR");

console.log(true || false)

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = true && 'Hola Mundo' && 150; //Que va a evaluar o hacer , el ultimo valor imprime 150 
//Si tiene false, no evalua 
const a2 = "Hola " && "Mundo" && soyFalse;
const a3 = soyFalse || "Ya no soy false";
const a4 = soyFalse || soyUndefined || soyNull || regresaTrue() || "Ya no soy falsede nuevo";
//Si se le pone true dentro del || regresa true , si no tuviera true deveuvel el ultimo 

console.log({a1, a2, a3, a4}); 

// Por ejemplo est situacion
if (regresaFals() && regresaTrue() && (true || false || true)) {
    console.log('Hacer algo');
} else {
    console.log('Hacer otra cosa');
}