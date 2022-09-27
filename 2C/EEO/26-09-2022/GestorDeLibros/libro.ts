export class Libro {

    /* ATRIBUTOS */
    private titulo : string;
    private autor : string;
    private edicion : number;
    private cantPaginas : number;
    private genero : string;
    private editorial : string;
    private imprenta : string;
    private ISBN : number;

    /* CONSTRUCTOR */
    public constructor (pTitulo : string, pAutor : string, pEdicion : number, pCantPaginas : number, pGenero : string, pEditorial : string, pImprenta : string, pISBN : number) {
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
    public setTitulo (pTitulo : string) {
        this.titulo = pTitulo;
    }

    public setAutor (pAutor : string) {
        this.autor = pAutor;
    }

    public setEdicion (pEdicion : number) {
        this.edicion = pEdicion;
    }

    public setCantPaginas(pCantPaginas : number) {
        this.cantPaginas = pCantPaginas;
    }

    public setGenero (pGenero : string) {
        this.genero = pGenero;
    }

    public setEditorial (pEditorial : string) {
        this.editorial = pEditorial;
    }

    public setImprenta (pImprenta : string) {
        this.imprenta = pImprenta;
    }

    public setISBN (pISBN : number) {
        this.ISBN = pISBN;
    }

    /* GET */
    public getTitulo () : string {
        return this.titulo;
    }

    public getAutor () : string {
        return this.autor;
    }

    public getEdicion () : number {
        return this.edicion;
    }

    public getCantPaginas () : number {
        return this.cantPaginas;
    }

    public getGenero () : string {
        return this.genero;
    }

    public getEditorial () : string {
        return this.editorial;
    }

    public getImprenta () : string {
        return this.imprenta;
    }

    public getISBN () : number {
        return this.ISBN;
    }

    /* OTROS */
}