
// Ok esto se debe de crear con la palabra new
// Esta esla forma vieja que se usabahace 5 u 8 años 
function Persona(nombre, edad) {
    console.log('Se ejecuto esta lina');
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function() {
        console.log(`Nombre: ${this.nombre} Edad: ${this.edad}`);
    }

}

const maria = new Persona('Maria', 18);
const melissa = new Persona('Melissa',35);

maria.imprimir();
melissa.imprimir();