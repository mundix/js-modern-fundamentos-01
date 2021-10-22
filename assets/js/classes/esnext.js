// URL para verifiar si es compatible el private en Js 
// https://caniuse.com/mdn-javascript_classes_private_class_fields
class Resctangulo {
    
    #area = 0;

    constructor(base = 0, altura = 0) {
        
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }

    calcularArea () {
        console.log(this.#area);
    }
}


const rectangulo = new Resctangulo(10,15);
// Esto no es correcto poder modificar los parametros
// No deberiamos poder modifciar esto directamente 
rectangulo.calcularArea();
console.log({rectangulo});