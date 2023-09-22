function addNewRow() {
  table.row
    .add([
      counter + ".1",
      counter + ".2",
      counter + ".3",
      counter + ".4",
      counter + ".5",
    ])
    .draw(false);

  counter++;
}

const table = new DataTable("#example");
let counter = 1;

document.querySelector("#addRow").addEventListener("click", addNewRow);

document.querySelector("#mos").addEventListener("click", neo);

function neo() {
  var registros = table.rows().data();

  var objetos = [];
  var i = 0;
  registros.each(function () {
    var fila = this;
    var objeto = {
      columna1: fila[i][0], // Columna 1
      columna2: fila[i][1], // Columna 2
      columna3: fila[i][2], // Columna 3
      columna4: fila[i][3], // Columna 3
      columna5: fila[i][4], // Columna 3
    };
    objetos.push(objeto);
    ++i;
  });

  //for (let index = 0; index < objetos.length; index++) {
  //  os = JSON.stringify(objetos, ["columna"][i]);
  os = JSON.stringify(objetos, ["columna1"]);

  //}

  console.log(os);
  //console.log({ data: table.data() });
  //Hola = Object.values({ data: table.data() });

  //console.log(objetos);
}

/*
$(document).ready(function () {
  // Inicializa la DataTable
  var miDataTable = $("#miDataTable").DataTable();

  // Obtiene los registros de la DataTable
  var registros = miDataTable.rows().data();

  // Convierte los registros en objetos JavaScript
  var objetos = [];
  registros.each(function () {
    var fila = this;
    var objeto = {
      nombre: fila[0], // Columna 1
      edad: parseInt(fila[1]), // Columna 2
      correo: fila[2], // Columna 3
    };
    objetos.push(objeto);
  });

  // Ahora tienes un array de objetos JavaScript
  console.log(objetos);
});*/

/*
// Obtén la referencia a la DataTable
var miTabla = $("#miTabla").DataTable();

// Obtén todos los registros de la DataTable
var registros = miTabla.rows().data();

// Convierte los registros en objetos JavaScript
var objetos = [];
var i = 0;
registros.each(function () {
  var registro = this;
  var objeto = {
    id: registro[i][0], // Supongamos que la primera columna es el ID
    nombre: registro[i][1], // Supongamos que la segunda columna es el nombre
    email: registro[i][2], // Supongamos que la tercera columna es el email
  };
  objetos.push(objeto);
  ++i;
  console.log(i);
});

// Ahora, objetos contiene una matriz de objetos JavaScript
console.log(objetos);
*/
