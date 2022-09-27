import { Libro } from './libro';

class GestorLibro {

    /* ATRIBUTOS */
    private listaLibros : Libro[];

    /* CONSTRUCTOR */
    public constructor (pListaLibros : Libro[]) {
        this.listaLibros = pListaLibros;
    }

    /* SET */

    public setListaLibro (pListaLibro : Libro[]) {
        this.listaLibros = pListaLibro;
    }

    /* GET */
    public getListaLibros () : Libro[] {
        return this.listaLibros;
    }

    /* OTROS */
    public consultarLibro (pLibro : Libro) : Libro {
        let libro = new Libro('','',0,0,'','','',0);
        for (let i : number = 0; i < this.listaLibros.length; i++) {
            if (this.listaLibros[i] === pLibro) {
                console.log(this.listaLibros[i]);
                return this.listaLibros[i];
            }
        }
        return libro;
    }

    public insertarLibro (pLibro : Libro) {
        this.listaLibros.push(pLibro);
    }

    public modificarLibro (pLibro : Libro, pTitulo? : string, pAutor? : string, pEdicion? : number, pCantPaginas? : number, pGenero? : string, pEditorial? : string, pImprenta? : string, pISBN? : number) {
        let libroAModificar : Libro = this.consultarLibro(pLibro);
        for (let i : number = 0; i < this.listaLibros.length; i++) {
            if (this.listaLibros[i] === pLibro) {
                if (pTitulo != undefined) {
                    this.listaLibros[i].setTitulo(pTitulo);
                }
                if (pAutor != undefined) {
                    this.listaLibros[i].setAutor(pAutor);
                }
                if (pEdicion != undefined) {
                    this.listaLibros[i].setEdicion(pEdicion);
                }
                if (pCantPaginas != undefined) {
                    this.listaLibros[i].setCantPaginas(pCantPaginas);
                }
                if (pGenero != undefined) {
                    this.listaLibros[i].setGenero(pGenero);
                }
                if (pEditorial != undefined) {
                    this.listaLibros[i].setEditorial(pEditorial);
                }
                if (pImprenta != undefined) {
                    this.listaLibros[i].setImprenta(pImprenta);
                }
                if (pISBN != undefined) {
                    this.listaLibros[i].setISBN(pISBN);
                }
                //this.listaLibros.splice(i-1,1,pLibro);
            }
        }
    }

    public eliminarLibro (pLibro : Libro) {
        for (let i : number = 0; i < this.listaLibros.length; i++) {
            if (this.listaLibros[i] === pLibro) {
                this.listaLibros.splice(i-1,1);
            }
        }
    }
}

/* Creo 3 libros */
let libro1 = new Libro('Sabiduria','Sri Sri Ravi Shankar',1,123,'Religioso','Ala','La hojita',1234567890123);
let libro2 = new Libro('Libro 2','Autor 2',2,222,'Genero 2','Editorial 2','Imprenta 2',2222222222222);
let libro3 = new Libro('Libro 3','Autor 3',3,333,'Genero 3','Editorial 3','Imprenta 3',3333333333333);

/* Creo el gestor de libros con los 3 libros creados antes */
let gestorLibro1 = new GestorLibro([libro1, libro2, libro3])
console.log(gestorLibro1);

gestorLibro1.consultarLibro(libro1);
gestorLibro1.consultarLibro(libro3);

let libro4 = new Libro('Libro 4','Autor 4',4,444,'Genero 4','Editorial 4','Imprenta 3',4444444444444);

gestorLibro1.insertarLibro(libro4);
console.log(gestorLibro1);

gestorLibro1.eliminarLibro(libro4);
console.log(gestorLibro1);

gestorLibro1.modificarLibro(libro3, 'Libro 5');
console.log(gestorLibro1);

gestorLibro1.modificarLibro(libro3, 'Libro 5', 'Autor 5');
console.log(gestorLibro1);

gestorLibro1.modificarLibro(libro3, '', '', 5);
console.log(gestorLibro1);