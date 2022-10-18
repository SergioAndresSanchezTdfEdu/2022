import { Cliente } from "./claseCliente";
import { Revista } from "./claseRevista";
import { Libro } from "./claseLibro";
import { Libreria } from "./claseLibreria";

/* Lista de autores */
let autores = ['Pedro','Rosa','Juan','Araceli'];

/* Lista de generos */
let generos= ['Drama','Terror','Comedia','Vaqueros'];

/* Creo los libros */
let libro1:Libro=new Libro('Campanita',50,'Pedro',200,'Comedia','sadfasdasdasdasdsad');
let libro2:Libro=new Libro('iron man',150,'Juan',300,'Drama','asfasdadqdq');

/* Creo las revistas */
let revista1:Revista=new Revista('Para ti',20,'Rosa',20,5,2022);
let revista2:Revista=new Revista('Oeste',15,'Araceli',12,4,2021);

/* Creo los Clientes */
let cliente1:Cliente=new Cliente('Juan','Perez',11111,'Velez Sarfield',autores,generos,0.1,[libro1],[revista1],[libro2]);
let cliente2:Cliente=new Cliente('Hernan','Rodriguez',112212,'Nuñez',autores,generos,0.3,[libro2],[revista2],[libro1]);

/* Creo Lista de Clientes */
let arregloCliente:Cliente[]=[cliente1,cliente2];

/* Creo Listas de Libros */
let arregloLibro:Libro[]=[libro1,libro2];

/* Creo Listas de Revistas */
let arregloRevista:Revista[]=[revista1,revista2];

/* CreoLa libreria */
let libreria1:Libreria=new Libreria(arregloCliente,arregloLibro,arregloRevista);

/* Claculo Precio del Libro1 para el Cliente1 */
let primerPrecio=libreria1.calcularPrecio(cliente1,libro1);
console.log('El Cliente ' + cliente1.getNombre() + ' ' + cliente1.getApellido() + ' tiene un precio para el libro ' + libro1.getTitulo() + ' de $ ' + primerPrecio);

/* Consulto si el cliente1 compró el libro1 */
let libroComprado = libreria1.conocerLibroRevistaComprado(cliente1,libro1);
console.log('El Cliente ' + cliente1.getNombre() + ' ' + cliente1.getApellido() + ' compró el libro ' + libro1.getTitulo() + '? ' + libroComprado);

/* Consulto si el cliente 1 compró el libro2 */
let libroComprado2 = libreria1.conocerLibroRevistaComprado(cliente1,libro2);
console.log('El Cliente ' + cliente1.getNombre() + ' ' + cliente1.getApellido() + ' compró el libro ' + libro2.getTitulo() + '? ' + libroComprado2);

/* Consulto si el cleinte 2 compró la revista1 */
let revistaComprada = libreria1.conocerLibroRevistaComprado(cliente1,revista1);
console.log('El Cliente ' + cliente1.getNombre() + ' ' + cliente1.getApellido() + ' compró la revista ' + revista1.getTitulo() + '? ' + revistaComprada);

/* Consulto si al cliente1 le gusta el libro2 */
let gustaLibro = libreria1.conocerSiGustaLibro(cliente1,libro2);
console.log('Al Cliente ' + cliente1.getNombre() + ' ' + cliente1.getApellido() + ' le gusta el libro ' + libro2.getTitulo() + '? ' + gustaLibro);

/* Consulto si al cliente2 le gusta el libro2 */
let gustaLibro2 = libreria1.conocerSiGustaLibro(cliente2,libro2);
console.log('Al Cliente ' + cliente2.getNombre() + ' ' + cliente2.getApellido() + ' le gusta el libro ' + libro2.getTitulo() + '? ' + gustaLibro2);