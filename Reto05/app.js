import PromptSync from "prompt-sync";
const prompt = PromptSync();


// Funcion sumar
function sumar(a, b) {
    return a + b;
}

//Funcion Restar
function restar(a, b) {
    return a - b;
}

// Funcion multiplicar
function multiplicar(a, b) {
    return a * b;
}

//Funcion dividir
function dividir(a, b) {
    if (b === 0) {
        return "Error: Division por cero";
    }
    return a / b;
}

// Funcion de mostrar los resultados

const mostrarResultado = (operacion, resultado) => console.log("Resultado de la " + operacion + ": " + resultado);


// Se muestran las opciones al ususario
console.log("--- Calculadora Simple ---");
console.log("1. Suma");
console.log("2. Resta");
console.log("3. Multiplicacion");
console.log("4. Division");

//Se recibe el resultado
const opcion = prompt("Elija una operacion (1-4): ");

//Se solicitan los numeros al usuario
const num1 = Number(prompt("Ingrese el primer numero: "));
const num2 = Number(prompt("Ingrese el segundo numero: "));

// Validacion estricta: verificamos que ambos sean tipo 'number' y no sean NaN
if (typeof num1 === "number" && typeof num2 === "number") {

    //Segun la opcion ingresada se realiza una u otra operacion

    //Suma
    if (opcion == 1){

        mostrarResultado("suma", sumar(num1, num2));
    }

    //Resta
    else if (opcion == 2){
        mostrarResultado("resta", restar(num1, num2));
    }

    //Multiplicacion
    else if (opcion == 3){

        mostrarResultado("multiplicacion", multiplicar(num1, num2));
    }
      
    //Divicion
    else if (opcion == 4){
        const resultadoDiv = dividir(num1, num2);
        mostrarResultado("division", resultadoDiv);
    }
    
    else{

        console.log("La opcion ingresada no es valida");
        
    }
} 

else {
    console.log("Error: Los datos ingresados deben ser numericos.");
}