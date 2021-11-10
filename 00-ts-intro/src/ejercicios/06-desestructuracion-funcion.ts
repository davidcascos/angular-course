/*
    ===== Código de TypeScript =====
*/

//let variable que puede cambiar
//const variable constante que no cambiara

export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150
}
const tableta: Producto = {
    desc: 'iPad Air',
    precio: 350
}

const articulos = [telefono, tableta];

export function calculaISV(productos: Producto[]): [number, number] {
    let total = 0;

    //No es necesario utilizar todo el objeto, se puede desestructurar y obtener solo lo que nos interesa 
    //productos.forEach((producto) => {
    productos.forEach(({ precio }) => {
        //total += producto.precio;
        total += precio;
    });

    return [total, total * 0.15];
}

//Se puede desestructurar la respuesta de la funcion para utilizar las diferentes respuestas
const [total, isv] = calculaISV(articulos);

console.log('Total: ', total);
console.log('ISV: ', isv);