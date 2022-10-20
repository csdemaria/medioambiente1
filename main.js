class Persona{
    constructor(nombre, localidad){
        this.nombre = nombre
        this.localidad = localidad
    }

    toString(){
        return `Hola, ${this.nombre} bienvenido/a al sitio!`
    }
}

//Bienvenida

let nombre = prompt("Ingrese su nombre.");

let saludo = "Bienvenido " + nombre + " a nuestro sitio.";

alert(saludo);

let localidad = prompt("En que provincia vivis?");

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
persona1 = new Persona(nombre,localidad)

document.getElementById("personaNueva").innerHTML = persona1.toString()

//Dark Mode - Light Mode

function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
}

//Cálculo residuos index

function multiplicacion()
{
        num1 = document.getElementById("diasIngresados").value;
        num2 = 0.79;
        document.getElementById("resultado").innerHTML = num1 * num2;
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '287552b3d1msh125ee3dabfea396p146740jsn16950b79cc9a',
		'X-RapidAPI-Host': 'environment-news-live.p.rapidapi.com'
	}
};

fetch('https://environment-news-live.p.rapidapi.com/news/timesofindia', options)
    .then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

// function mostrarNoticia(){

// }