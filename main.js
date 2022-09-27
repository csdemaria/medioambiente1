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



