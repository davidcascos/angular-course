/*
    ===== Código de TypeScript =====
*/
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'ED Sheeran',
        anio: 2015
    }
}

const autor = 'Fulano';

//Desestructurar objetos en { }
//Se puede crear un "grupo" de constantes que se llaman igual que la interfaz, para evitar usar reproductor.*
//**En caso de tener variables con el mismo nombre, se puede indicar un "id" por ejepmlo autorDetalle o vol
const { volumen: vol, segundo, cancion, detalles } = reproductor;
//const { volumen, segundo, cancion, detalles: { autor: autorDetalle } } = reproductor;
const { autor: autorDetalle } = detalles;

// console.log('El volumen actual es: ', vol);
// console.log('El segundo actual es: ', segundo);
// console.log('La canción actual es: ', cancion);
// console.log('El autor: ', autor);
// console.log('El autorDetalle: ', autorDetalle);

//---------------------------------------------------------------------------------------------------------
//Desestructurar objetos en [ ]
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [p1, p2, p3] = dbz;
const [, , p4] = dbz; //Si solo nos interesa una posicion, se dejan espacios en blanco

console.log('Personaje 1: ', p1);
console.log('Personaje 2: ', p2);
console.log('Personaje 3: ', p3);
console.log('Personaje 3: ', p4);