/*
    ===== Código de TypeScript =====
*/

import { calculaISV, Producto } from "./06-desestructuracion-funcion";

const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 150
    }];

    //Al importar funciones vigilar ya que ejecuta todo el codigo de donde se esta importando
    const [total, isv] = calculaISV(carritoCompras);

    console.log('Total: ', total);
    console.log('ISV: ', isv);