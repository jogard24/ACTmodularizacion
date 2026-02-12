// Sistema de facturación
// Crea un programa que reciba una lista de productos (nombre, precio, cantidad) y calcule:
// • Subtotal por producto.
// • Total sin IVA.
// • IVA total (19%).
// • Valor total a pagar.
// Aplica modularización y retorno de valores.
// Como desafío adicional, implementa la función final como función flecha.

import PromptSync from "prompt-sync";
const prompt = PromptSync();

// Funcion comun para calcular subtotal por producto
function calcularSubtotalProducto(precio, cantidad) {
    return precio * cantidad;
}

// Funcion comun para calcular el IVA (19%)
function calcularIVA(monto) {
    return monto * 0.19;
}

// Funcion flecha para el calculo del total final
const calcularTotalFinal = (subtotal, iva) => subtotal + iva;


let totalSinIva = 0;
let continuar = "si";

console.log("--- Factura ---");

while (continuar.toLowerCase() === "si") {

    //Alamaceno los datos qe nos proporciona el usuario
    const nombre = prompt("Nombre del producto: ");
    const precio = Number(prompt("Precio unitario: "));
    const cantidad = Number(prompt("Cantidad: "));

    // Validacion con typeof identificando el tipo de dato que ingresa el usario
    if (typeof precio === "number" && typeof cantidad === "number" && precio > 0 && cantidad > 0) {
        
        //Envio las variables de precio y cantidad a la funcion CalculaSubtotal
        const subtotalProducto = calcularSubtotalProducto(precio, cantidad);
        totalSinIva += subtotalProducto;
        
        console.log("Subtotal de " + nombre + ": $" + subtotalProducto.toFixed(2));
        
    } 
    
    else {
        console.log("Error: Precio y cantidad deben ser valores numericos validos.");
    }

    continuar = prompt("¿Desea agregar otro producto a la factura? (si/no): ");
}


//Llamo y alamaceno a las funciones de Iva y total de compra
const ivaTotal = calcularIVA(totalSinIva);
const netoAPagar = calcularTotalFinal(totalSinIva, ivaTotal);

// Muestro la factura al usario
console.log("\n--- Factura Final ---");
console.log("Total Neto (sin IVA): $" + totalSinIva.toFixed(1));
console.log("IVA Total (19%):      $" + ivaTotal.toFixed(1));
console.log("-------------------------------");
console.log("VALOR TOTAL A PAGAR:  $" + netoAPagar.toFixed(1));