/*
    ===== Código de TypeScript =====
*/

//<T> es tipo generico, puede ser cualquier tpo de dato a la hora de llamarlo
function queTipoSoy<T>(argumento: T) {
    return argumento;
}

let soyString = queTipoSoy('Hola Mundo');
let soyNumero = queTipoSoy(100);
let soyArreglo = queTipoSoy([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//<string> indicando que queremos un string de vuelta
let soyExplicito = queTipoSoy<string>('Hola Mundo');