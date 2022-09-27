//Bienvenida

let nombre = prompt("Ingrese su nombre.");

let saludo = "Bienvenido " + nombre + " a nuestro sitio.";

alert(saludo);


// Pregunta inicial

let preguntainicial = prompt("Te interesa el reciclaje?");

let afirmacion = "si";

if(preguntainicial == afirmacion){
    //devuelve true
    alert("Genial! Esperemos que disfrutes el contenido de nuestra página.")
} else {
    //devuelve false
    alert("Tal vez leyendo la información en esta página despierte tu interés por el reciclaje.")
}

// let numeroDias = prompt("Ingrese una cantidad de días");

// let numValor = 0.79;

// let respuestaCalculo = parseInt(numberRequest) * numValor;

// let resultado = 0;
// let operacion = prompt("Ingrese la operación");
// let numeroA = prompt("Ingrese un número");
// let numeroB = prompt("Ingrese un número");
    

// function calcular(operacion, numeroA, numeroB) {

    
//     switch (operacion) {
//         case "sumar":
//             resultado = numeroA + numeroB
//             break;
//         case "restar":
//             resultado = numeroA - numeroB
//             break;
//         case "multiplicar":
//             resultado = numeroA * numeroB
//             break;
//         case "dividir":
//             resultado = numeroA / numeroB
//             break;
//         default:
//             resultado = 0
//             break;
//     }
//     alert("El resultado de la operación es: " + resultado)
// }

// let resultado = 0;
// let numeroA = prompt("Ingrese un número de días");
// let numeroB = 0.79;
    

// function calcular(numeroA, numeroB) {

//      resultado = numeroA * numeroB;
    
//     alert("El resultado de la operación es: " + resultado)
// }

function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = 0.79;
        document.getElementById("result").innerHTML = num1 * num2;
}

