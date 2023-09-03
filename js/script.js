const DATA_URL = "json/data.json"; // URL que contiene los datos que queremos mostrar

const container = document.getElementById("container"); // "Traemos" utilizando el DOM el div de id "container" para colocar la información en él

/**
 * Función que recibe por parámetro un array con los datos que se mostrarán en el DOM
 * Los datos se mostrarán dentro del div de id "container" y por cada ítem se está creando un nuevo párrafo donde se
 * imprime el campo "name" y el campo "lastname" separados por un espacio
 */
function showData(dataArray) {
  // El for itera sobre los elementos del array
  for (const item of dataArray) {
    // En la siguiente línea se utilizan "backticks" para armar el String. Más info => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals
    const html = `<p> ${item.name} ${item.lastname} </p>`;

    // Se agrega el párrafo al innerHTML del contenedor
    container.innerHTML += html;
  }
}

// Fetch al archivo con los datos
fetch(DATA_URL)
  // Cuando la solicitud se completa
  .then(response => response.json())
  // Cuando la respuesta es válida
  .then(data => showData(data))
  // Cuando la solicitud falla
  .catch(error => console.log(error));
