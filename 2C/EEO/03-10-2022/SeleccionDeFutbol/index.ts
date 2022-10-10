import { Persona } from './persona';
import { Futbolista } from './futbolista';
import { Entrenador } from './entrenador';
import { Masajista } from './masajista';
import { SeleccionDeFutbol } from './seleccionDeFutbol';

let persona1 : Persona = new Persona("Sergio","Sanchez",45);
let persona2 : Persona = new Persona("Pablo","Sanchez",43);
let persona3 : Persona = new Persona("Raúl","Sanchez",38);

let futbolista1 : Futbolista = new Futbolista("Futbolista1","Uno",25,5,"Equipo1",100);
let futbolista2 : Futbolista = new Futbolista("Futbolista2","Dos",26,6,"Equipo1",99);
let futbolista3 : Futbolista = new Futbolista("Futbolista3","Tres",27,7,"Equipo1",98);
let futbolista4 : Futbolista = new Futbolista("Futbolista4","Cuatro",28,8,"Equipo1",97);
let futbolista5 : Futbolista = new Futbolista("Futbolista5","Cinco",29,9,"Equipo1",96);

let listaDeFutbolistas1 : Futbolista[] = [futbolista1, futbolista2, futbolista3, futbolista4, futbolista5];

console.log(listaDeFutbolistas1);

let futbolista6 : Futbolista = new Futbolista("Futbolista6","Seis",30,10,"Equipo1",95);
let futbolista7 : Futbolista = new Futbolista("Futbolista7","Siete",31,11,"Equipo1",94);
let futbolista8 : Futbolista = new Futbolista("Futbolista8","Ocho",32,12,"Equipo1",93);
let futbolista9 : Futbolista = new Futbolista("Futbolista9","Nueve",33,13,"Equipo1",92);
let futbolista10 : Futbolista = new Futbolista("Futbolista10","Diez",34,14,"Equipo1",91);

let listaDeFutbolistas2 : Futbolista[] = [futbolista6, futbolista7, futbolista8, futbolista9, futbolista10];

console.log(listaDeFutbolistas2);

let entrenador1 : Entrenador = new Entrenador("Entrenador1","Uno",57,listaDeFutbolistas1);
let entrenador2 : Entrenador = new Entrenador("Entrenador2","Dos",58,listaDeFutbolistas2);

let masajista1 : Masajista = new Masajista("Masajista1","Uno",48,"Muscular");
let masajista2 : Masajista = new Masajista("Masajista2","Dos",49,"General");

let seleccionDeFutbol1 : SeleccionDeFutbol = new SeleccionDeFutbol("Los Leones","Argentina",entrenador1,masajista1,listaDeFutbolistas1);

console.log(seleccionDeFutbol1);

entrenador1.entrenarFutbolista(futbolista1);
entrenador1.entrenarFutbolista(futbolista2);
entrenador1.entrenarFutbolista(futbolista3);
entrenador1.entrenarFutbolista(futbolista4);
entrenador1.entrenarFutbolista(futbolista5);

entrenador1.jugarPartido();

console.log(entrenador1.getListafutbolistas());

entrenador1.entrenarFutbolista(futbolista1);
entrenador1.entrenarFutbolista(futbolista2);
entrenador1.entrenarFutbolista(futbolista3);
entrenador1.entrenarFutbolista(futbolista4);
entrenador1.entrenarFutbolista(futbolista5);

entrenador1.jugarPartido();

console.log(entrenador1.getListafutbolistas());

entrenador1.enviarADescansar(futbolista1);
entrenador1.enviarADescansar(futbolista2);
entrenador1.enviarADescansar(futbolista3);
entrenador1.enviarADescansar(futbolista4);
entrenador1.enviarADescansar(futbolista5);

console.log(entrenador1.getListafutbolistas());

masajista1.darMasaje(futbolista1);
masajista1.darMasaje(futbolista2);
masajista1.darMasaje(futbolista3);
masajista1.darMasaje(futbolista4);
masajista1.darMasaje(futbolista5);

console.log(entrenador1.getListafutbolistas());

entrenador1.enviarADescansar(futbolista1);
entrenador1.enviarADescansar(futbolista2);
entrenador1.enviarADescansar(futbolista3);
entrenador1.enviarADescansar(futbolista4);
entrenador1.enviarADescansar(futbolista5);

console.log(entrenador1.getListafutbolistas());

masajista1.darMasaje(futbolista1);
masajista1.darMasaje(futbolista2);
masajista1.darMasaje(futbolista3);
masajista1.darMasaje(futbolista4);
masajista1.darMasaje(futbolista5);

console.log(entrenador1.getListafutbolistas());

entrenador1.enviarADescansar(futbolista1);
entrenador1.enviarADescansar(futbolista2);
entrenador1.enviarADescansar(futbolista3);
entrenador1.enviarADescansar(futbolista4);
entrenador1.enviarADescansar(futbolista5);

console.log(entrenador1.getListafutbolistas());

seleccionDeFutbol1.agregarFutbolista(futbolista6);
seleccionDeFutbol1.agregarFutbolista(futbolista7);
seleccionDeFutbol1.agregarFutbolista(futbolista8);
seleccionDeFutbol1.agregarFutbolista(futbolista9);
seleccionDeFutbol1.agregarFutbolista(futbolista10);

console.log(seleccionDeFutbol1);

seleccionDeFutbol1.despedirFutbolista(futbolista10);

console.log(seleccionDeFutbol1);

seleccionDeFutbol1.setEntrenador(entrenador2);

console.log(seleccionDeFutbol1);

seleccionDeFutbol1.setMasajista(masajista2);

console.log(seleccionDeFutbol1);