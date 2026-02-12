// Módulo de operaciones bancarias
// Diseña un sistema que permita simular las siguientes operaciones:
// • Depositar dinero, retirar dinero y consultar saldo.
// Cada operación debe estar representada por una función diferente y el saldo debe
// mantenerse actualizado entre operaciones.
// Aplica ciclos para permitir múltiples operaciones hasta que el usuario decida salir.

import PromptSync from "prompt-sync";
const prompt = PromptSync();

// Funcion la cual realiza el deposito
function realizarDeposito(saldoActual, monto) {
    return saldoActual + monto;
}

// Función que realiza el proceso de retiro de dinero 
function realizarRetiro(saldoActual, monto) {
    if (monto <= saldoActual) {
        return saldoActual - monto;
    } 
    
    else {
        console.log("Error: Fondos insuficientes.");
        return saldoActual;
    }
}

// Funcion que muestra el saldo actual al cliente
function consultarSaldo(saldo) {
    console.log("Su saldo actual es: $" + saldo.toFixed(2));
}

let saldoGlobal = 1000; // Saldo inicial
let continuar = true; //Condicional de l ciclo

console.log("--- Menu Principal -- Sistema Bancario $$ ---");

while (continuar) {
    console.log("\nMenu de Opciones:");
    console.log("1. Depositar");
    console.log("2. Retirar");
    console.log("3. Consultar Saldo");
    console.log("4. Salir");

    const opcion = prompt("Seleccione una operacion (1-4): ");

    if (opcion === "1") {
        const montoDep = Number(prompt("Ingrese el monto a depositar: "));
        
        // Validación con typeof verificando que el dato sea numerico
        if (typeof montoDep === "number" && montoDep > 0) {
            saldoGlobal = realizarDeposito(saldoGlobal, montoDep);
            console.log("Deposito exitoso.");

        } 
        
        // En caso contrario
        else {
            console.log("Error: El monto debe ser un numero positivo.");
        }

    } 
    
    // Opcion de retirar
    else if (opcion === "2") {
        const montoRet = Number(prompt("Ingrese el monto a retirar: "));

        if (typeof montoRet === "number" && montoRet > 0) {
            saldoGlobal = realizarRetiro(saldoGlobal, montoRet);
        } 
        
        else {
            console.log("Error: El monto debe ser un numero positivo.");
        }

    } 
    
    // Opcion de consultar saldo
    else if (opcion === "3") {
        consultarSaldo(saldoGlobal);
    } 
    
    // Opcion de salir
    else if (opcion === "4") {
        console.log("Gracias por utilizar nuestros servicios.");
        continuar = false;

    } 
    
    // En caso de seleccionar una opcion no permitida
    else {
        console.log("Opcion no valida. Intente de nuevo.");
    }
}