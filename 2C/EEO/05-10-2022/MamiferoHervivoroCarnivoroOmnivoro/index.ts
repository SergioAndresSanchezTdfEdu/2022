import { Herbivoro } from "./herbivoro";
import { Carnivoro } from "./carnivoro";
import { Omnivoro } from "./omnivoro";

let elefante : Herbivoro = new Herbivoro(4,["Arboles", "Arbustos"]);

let leon : Carnivoro = new Carnivoro(4,["Ciervos", "Cebras"]);

let oso : Omnivoro = new Omnivoro(4,["Truchas", "Bayas", "Miel"]);

elefante.comer();
console.log("Soy un Elefante y tengo " + elefante.getCantidadPatas() + " patas.");
console.log("Soy un Elefante y como: " + elefante.getPlantas());

leon.comer();
console.log("Soy un León y tengo " + leon.getCantidadPatas() + " patas.");
console.log("Soy un León y como: " + leon.getComeAnimales());

oso.comer();
console.log("Soy un Oso y tengo " + oso.getCantidadPatas() + " patas.");
console.log("Soy un Oso y como: " + oso.getComeTodo());