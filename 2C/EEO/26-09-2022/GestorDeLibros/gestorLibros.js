"use strict";
exports.__esModule = true;
var libro_1 = require("./libro");
var GestorLibro = /** @class */ (function () {
    /* CONSTRUCTOR */
    function GestorLibro(pListaLibros) {
        this.listaLibros = pListaLibros;
    }
    /* SET */
    GestorLibro.prototype.setListaLibro = function (pListaLibro) {
        this.listaLibros = pListaLibro;
    };
    /* GET */
    GestorLibro.prototype.getListaLibros = function () {
        return this.listaLibros;
    };
    /* OTROS */
    GestorLibro.prototype.consultarLibro = function (pLibro) {
        var libro = new libro_1.Libro('', '', 0, 0, '', '', '', 0);
        for (var i = 0; i < this.listaLibros.length; i++) {
            if (this.listaLibros[i] === pLibro) {
                console.log(this.listaLibros[i]);
                return this.listaLibros[i];
            }
        }
        return libro;
    };
    GestorLibro.prototype.insertarLibro = function (pLibro) {
        this.listaLibros.push(pLibro);
    };
    GestorLibro.prototype.modificarLibro = function (pLibro, pTitulo, pAutor, pEdicion, pCantPaginas, pGenero, pEditorial, pImprenta, pISBN) {
        var libroAModificar = this.consultarLibro(pLibro);
        for (var i = 0; i < this.listaLibros.length; i++) {
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
    };
    GestorLibro.prototype.eliminarLibro = function (pLibro) {
        for (var i = 0; i < this.listaLibros.length; i++) {
            if (this.listaLibros[i] === pLibro) {
                this.listaLibros.splice(i - 1, 1);
            }
        }
    };
    return GestorLibro;
}());
/* Creo 3 libros */
var libro1 = new libro_1.Libro('Sabiduria', 'Sri Sri Ravi Shankar', 1, 123, 'Religioso', 'Ala', 'La hojita', 1234567890123);
var libro2 = new libro_1.Libro('Libro 2', 'Autor 2', 2, 222, 'Genero 2', 'Editorial 2', 'Imprenta 2', 2222222222222);
var libro3 = new libro_1.Libro('Libro 3', 'Autor 3', 3, 333, 'Genero 3', 'Editorial 3', 'Imprenta 3', 3333333333333);
/* Creo el gestor de libros con los 3 libros creados antes */
var gestorLibro1 = new GestorLibro([libro1, libro2, libro3]);
console.log(gestorLibro1);
gestorLibro1.consultarLibro(libro1);
gestorLibro1.consultarLibro(libro3);
var libro4 = new libro_1.Libro('Libro 4', 'Autor 4', 4, 444, 'Genero 4', 'Editorial 4', 'Imprenta 3', 4444444444444);
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
