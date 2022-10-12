//Elegir Localidad

let localidades = ["Abasto", "City Bell", "El Peligro", "Joaquin Gorina", "Lisandro Olmos", "La Plata(Capital)", "Los Hornos", "Manuel B. Gonnet", "Melchor Romero", "Ringuelet", "Tolosa", "Villa Elvira", "Villa Elisa"]

for (const localidad of localidades) {
  let elementOption = document.createElement("OPTION");
  elementOption.innerText = localidad;
  document.getElementById("localidades").appendChild(elementOption)
  }


function localidadElegida() {
  var x = document.getElementById("localidades").value;
  document.getElementById("lugarElegido").innerHTML = x;
}
