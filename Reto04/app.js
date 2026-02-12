// Análisis de números
// Crea un programa que reciba un número entero y determine:
// • Si es par o impar.
// • Si es positivo o negativo.
// • Si es primo.
// Cada validación debe estar contenida en una función diferente, y el resultado final
// debe mostrarse mediante una función principal.

import PromptSync from "prompt-sync";
const prompt = PromptSync();

// Función para determinar si es par o impar
function determinarParidad(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Impar";
    }
}

// Función para determinar si es positivo o negativo
function determinarSigno(numero) {
    if (numero > 0) {
        return "Positivo";
    } else if (numero < 0) {
        return "Negativo";
    } else {
        return "Cero";
    }
}

// Función para determinar si es primo
function esPrimo(numero) {
    if (numero <= 1) return false;
    let divisores = 0;
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores++;
        }
    }
    return divisores;
}

// 4. Función principal para consolidar y mostrar resultados
const mostrarAnalisis = (num, paridad, signo, primo) => {
    const primoTexto = primo  === 2 ? "Es primo" : "No es primo";
    console.log("\n--- Analisis del Numero " + num + " ---");
    console.log("1. Es par?: " + paridad);
    console.log("2. Signo:   " + signo);
    console.log("3. Es primo?: " + primoTexto);
};

// --- Flujo Principal ---

const entrada = prompt("Ingrese un numero entero para analizar: ");
const numeroEvaluar = Number(entrada);

// Validación con typeof 
if (typeof numeroEvaluar === "number") {
    
    // Ejecución de funciones de análisis
    const paridad = determinarParidad(numeroEvaluar);
    const signo = determinarSigno(numeroEvaluar);
    const primoResultado = esPrimo(numeroEvaluar);

    // Llamado a la función de salida
    mostrarAnalisis(numeroEvaluar, paridad, signo, primoResultado);

} else {
    console.log("Error: Debe ingresar un numero entero valido.");
}