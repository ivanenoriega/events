var alumnos = [
  "Andres Ferrer",
  "Angeles Argañaras",
  "Anton Brian Fejer Vilchez",
  "Augusto Enrico",
  "Cristian Bono",
  "Dayana Centorbi",
  "Debora Barrionuevo",
  "Fernanda Molina",
  "Fernando Sargiotto",
  "Gustavo Colazo",
  "Ignacio Mansilla",
  "Lisandro Medina Allende",
  "Lucas Banegas",
  "Maria victoria Castellano",
  "Marina Faenze",
  "Matias Villafañe",
  "Mayda Mora",
  "Nair Chacur",
  "Nicolas Andres Monguillot Marques",
  "Ricardo Genaizir",
  "Santiago Saffadi",
  "Tomas Peluffo",
  "Tomas Sargiotto"
];
var mentores = ["Rubiolo, Valentina", "Roqué, Fernanda", "Noriega, Ivan"];

var container = document.getElementById("container");

function agregarListado(mentores, titulo, id, validar) {
  var div = document.createElement("div"); // Para contener al listado y al titulo
  var listado = document.createElement("ul"); // Listado de elementos
  var encabezado = document.createElement("h2"); // Encabezado del div
  container.parentNode.append(div);

  // Agregamos los elementos al listado
  mentores.forEach(mentor => {
    var textoMentor = mentor;
    if (validar) {
      textoMentor = validarTutor(mentor);
    }
    var item = document.createElement("li");
    var text = document.createTextNode(textoMentor);
    item.appendChild(text);
    listado.append(item);
  });

  // Agregamos el texto al encabezado
  encabezado.appendChild(document.createTextNode(titulo));

  // Agregamos el contenido al div
  div.id = id;
  listado.className = "lista";
  div.append(encabezado);
  div.append(listado);
}

function validarTutor(mentor) {
  return mentor === "Rubiolo, Valentina"
    ? "Tutor: " + mentor
    : "Mentor: " + mentor;
}

agregarListado(mentores, "Mentores:", "mentores", true);
agregarListado(alumnos, "Alumnos", "alumnos", false);
