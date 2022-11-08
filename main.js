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

function saludar() {
    let nombre = localStorage.getItem('nombre');
    if(!nombre){
        nombre = prompt("Ingrese su nombre.");
      localStorage.setItem('nombre', nombre);
    }

    persona1 = new Persona(nombre)

    document.getElementById("personaNueva").innerHTML = persona1.toString()

  }
  
  saludar();


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