//Elegir Localidad

let localidades = ["City Bell", "La Plata(Capital)", "Manuel B. Gonnet", "Tolosa", "Villa Elisa"]

for (const localidad of localidades) {
  let elementOption = document.createElement("OPTION");
  elementOption.innerText = localidad;
  document.getElementById("localidades").appendChild(elementOption)
  }


function localidadElegida() {
  let puntosVerdes = document.getElementById("localidades").value;
  document.getElementById("lugarElegido").innerHTML = puntosVerdes;

  switch (puntosVerdes) {

    case "City Bell":
      document.getElementById("lugarElegido").innerHTML = ["Plaza Belgrano"];
      break;

    case "La Plata(Capital)":
      document.getElementById("lugarElegido").innerHTML = [" Parque Alberti (24 y 39) ", " Parque Castelli (24 y 67) ", " Plaza Alsina (1 y 38) ", " 72 y 28 (Altos de San Lorenzo) ", " Plaza Matheu (1 y 66) ", " Casa Ecológica del Paseo del Bosque ", " Dirección de Tratamiento de Residuos (49 y 21) ", " 652 y 22 (Villa Parque Sicardi) "];
      break;

    case "Manuel B. Gonnet":
      document.getElementById("lugarElegido").innerHTML = [" Delegación comunal ubicada en 495 y 15 bis ", " Parque Boveri "];
      break;

    case "Tolosa":
      document.getElementById("lugarElegido").innerHTML = ["Plaza del Carmen"];
      break;

    case "Villa Elisa":
      document.getElementById("lugarElegido").innerHTML = [" Parque Ecológico ", " Plaza Castells (Camino Centenario entre 49 y 51) "];
  
  }
}