/*
    ===== Código de TypeScript =====
*/

//al indicar :number al final hace referencia al tipo de return
function sumar(a: number, b: number): number {
    return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

//Los opcionales siempre al final, a no ser que pasemos un valor por defecto a las siguientes variables
//por ejemplo al indicar base=2 si no se pasa ningun valor para base utilizara el 2
function multiplicar(numero: number, otroNumero?: number, base: number = 2): number {
    return numero * base;
}

// const resultado1 = multiplicar(5); //5*2
// const resultado2 = multiplicar(5, 0); //5*2 otroNumero no hace nada
// const resultado3 = multiplicar(5, 0, 10); //5*10

// console.log(resultado3);
//---------------------------------------------------------------------------------------------------------
interface Personaje2 {
    nombre: string;
    pv: number;
    mostrarPv: () => void; //Declarar funcion dentro de una interfaz es posible
}

function curar(personaje: Personaje2, curarX: number): void {
    personaje.pv += curarX;
}

const nuevoPersonaje: Personaje2 = {
    nombre: 'Strider',
    pv: 50,
    mostrarPv() {
        console.log('Puntos de vida:', this.pv);
    }
}

curar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarPv(); //Asi se llamaria a la funcion de dentro de la interfaz