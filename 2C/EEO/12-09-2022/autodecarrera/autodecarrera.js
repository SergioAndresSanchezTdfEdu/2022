let readlineSync = require('readline-sync');

let vuelta1 = readlineSync.question("Indique Valor de vuelta 1");
let vuelta2 = readlineSync.question("Indique Valor de vuelta 2");
let vuelta3 = readlineSync.question("Indique Valor de vuelta 3");
let vuelta4 = readlineSync.question("Indique Valor de vuelta 4");

let tiempoTotal = 0; 

function sumarVueltas() {
  tiempoTotal = Number(vuelta1.value) + Number(vuelta2.value) + Number(vuelta3.value) + Number(vuelta4.value);
}

function tiempoTotal() {
  console.log("Tiempo total: ", tiempoTotal);
}

function tiempoPromedio() {
  console.log("Promedio de vuelta: ", tiempoTotal / 4);
}

sumarVueltas();
tiempoTotal();
tiempoPromedio();