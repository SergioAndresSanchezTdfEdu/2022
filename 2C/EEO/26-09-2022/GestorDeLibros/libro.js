"use strict";
exports.__esModule = true;
exports.Libro = void 0;
var Libro = /** @class */ (function () {
    /* CONSTRUCTOR */
    function Libro(pTitulo, pAutor, pEdicion, pCantPaginas, pGenero, pEditorial, pImprenta, pISBN) {
        this.titulo = pTitulo;
        this.autor = pAutor;
        this.edicion = pEdicion;
        this.cantPaginas = pCantPaginas;
        this.genero = pGenero;
        this.editorial = pEditorial;
        this.imprenta = pImprenta;
        this.ISBN = pISBN;
    }
    /* SET */
    Libro.prototype.setTitulo = function (pTitulo) {
        this.titulo = pTitulo;
    };
    Libro.prototype.setAutor = function (pAutor) {
        this.autor = pAutor;
    };
    Libro.prototype.setEdicion = function (pEdicion) {
        this.edicion = pEdicion;
    };
    Libro.prototype.setCantPaginas = function (pCantPaginas) {
        this.cantPaginas = pCantPaginas;
    };
    Libro.prototype.setGenero = function (pGenero) {
        this.genero = pGenero;
    };
    Libro.prototype.setEditorial = function (pEditorial) {
        this.editorial = pEditorial;
    };
    Libro.prototype.setImprenta = function (pImprenta) {
        this.imprenta = pImprenta;
    };
    Libro.prototype.setISBN = function (pISBN) {
        this.ISBN = pISBN;
    };
    /* GET */
    Libro.prototype.getTitulo = function () {
        return this.titulo;
    };
    Libro.prototype.getAutor = function () {
        return this.autor;
    };
    Libro.prototype.getEdicion = function () {
        return this.edicion;
    };
    Libro.prototype.getCantPaginas = function () {
        return this.cantPaginas;
    };
    Libro.prototype.getGenero = function () {
        return this.genero;
    };
    Libro.prototype.getEditorial = function () {
        return this.editorial;
    };
    Libro.prototype.getImprenta = function () {
        return this.imprenta;
    };
    Libro.prototype.getISBN = function () {
        return this.ISBN;
    };
    return Libro;
}());
exports.Libro = Libro;
