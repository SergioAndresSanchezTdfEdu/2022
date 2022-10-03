let readlineSync = require('readline-sync');

let vuelta1 = readlineSync.questionInt("Indique Valor de vuelta 1: ");
let vuelta2 = readlineSync.questionInt("Indique Valor de vuelta 2: ");
let vuelta3 = readlineSync.questionInt("Indique Valor de vuelta 3: ");
let vuelta4 = readlineSync.questionInt("Indique Valor de vuelta 4: ");

let tiempoTotal = 0; 

function sumarVueltas() {
  tiempoTotal = Number(vuelta1) + Number(vuelta2) + Number(vuelta3) + Number(vuelta4);
}

function mostrarTiempoTotal() {
  console.log("Tiempo total: ", tiempoTotal);
}

function tiempoPromedio() {
  console.log("Promedio de vuelta: ", tiempoTotal / 4);
}

sumarVueltas();
mostrarTiempoTotal();
tiempoPromedio();
