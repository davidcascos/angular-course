/*
    ===== Código de TypeScript =====
*/

class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string
    ) { }
}

class Heroe extends PersonaNormal {
    // alterEgo: string;
    // edad: number;
    // nombreReal: number;

    //Se puede evitar crear variables y luego constructor creandolo todo de una vez en el constructor
    //Se pueden añadir variables opcionales con ?
    constructor(
        public alterEgo: string,
        public edad?: number,
        public nombreReal?: string
    ) {
        super(nombreReal,'New York, USA');
    }
}

const ironman = new Heroe('IronMan', 45, 'Tony');

console.log(ironman);