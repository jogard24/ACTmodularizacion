// Crea un programa modularizado que permita registrar el nombre y tres notas de un estudiante. 
// Debe cumplir con las siguientes funciones: 
// •	Una función para calcular el promedio. 
// •	Una función para determinar si aprueba o reprueba. 
// •	Una función principal que muestre el mensaje final con nombre y resultado. 
// Aplica retorno de valores y estructuras condicionales. 

function calcularPromedio (nota1, nota2, nota3){
    return (nota1 + nota2 + nota3)/3;
}

function resultadoFinal (promedio){
    if (promedio <= 3.0){
        return  " reprobaste";
    }
    else {
        return  " aprobaste";
    }
}



function mostrarResultado(nombre, nota1, nota2, nota3) {
    let promedio = calcularPromedio(nota1, nota2, nota3);
    let resultado = resultadoFinal (promedio);
    return "El estudiante " +nombre+ " tiene un promedio de " +promedio+ " y su estado es de: " +resultado;
}

console.log(mostrarResultado("Jose", 4.0, 3.5, 2.8));
console.log(mostrarResultado("peter", 2.5, 2.0, 3.0));

