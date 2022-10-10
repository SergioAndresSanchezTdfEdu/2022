export class Mamifero {

    /* ATRIBUTOS */
    protected cantidadPatas : number; 

    /* CONSTRUCTOR */
    public constructor(pCantidadPatas : number) {
        this.cantidadPatas = pCantidadPatas;
    }

    /* SET */
    public setCantidadPatas(pCantidadPatas : number) {
        this.cantidadPatas = pCantidadPatas;
    }

    /* GET */
    public getCantidadPatas() : number {
        return this.cantidadPatas;
    }

    /* OTROS */
    public comer() : void {
        console.log("Comer");
    }
}