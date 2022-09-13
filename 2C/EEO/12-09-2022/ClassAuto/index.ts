/* CLASE AUTO */
class auto {

    /* ATRIBUTOS */
    private marca : string;
    private modelo : string;
    private anio : number;
    private color : string;
    private chasis : string; 
    private nuevo : boolean;
    private patente : string;
    private velocidad : number;
    private direccion : string;
    private prendido : boolean;
    
    /* CONSTRUCTOR */
    constructor(parMarca : string, parModelo : string, parAnio : number, parColor : string, parChasis : string,
                parNuevo : boolean, parPatente : string, parVelocidad : number, parDireccion : string, parPrendido : boolean) {

        this.marca = parMarca;
        this.modelo = parModelo;
        this.anio = parAnio;
        this.color = parColor;
        this.chasis = parChasis;
        this.nuevo = parNuevo;
        this.patente = parPatente;
        this.velocidad = parVelocidad;
        this.direccion = parDireccion;
        this.prendido = parPrendido;
    }

    /* FUNCIONES */
    /* SET */
    public setMarca(parMarca : string) {
        this.marca = parMarca;
    }

    public setModelo(parModelo : string) {
        this.modelo = parModelo;
    }

    public setAnio(parAnio : number) {
        this.anio = parAnio;
    }

    public setColor(parColor : string) {
        this.color = parColor;
    }

    public setChasis(parChasis : string) {
        this.chasis = parChasis;
    }

    public setNuevo(parNuevo : boolean) {
        this.nuevo = parNuevo;
    }

    public setPatente(parPatente : string) {
        this.patente = parPatente;
    }

    public setVelocidad(parVelocidad : number) {
        this.velocidad = parVelocidad;
    }

    public setDireccion(parDireccion : string) {
        this.direccion = parDireccion;
    }

    public setPrendido(parPrendido : boolean) {
        this.prendido = parPrendido;
    }

    /* GET */
    public getMarca() : string {
        return this.marca;
    }

    public getModelo() {
        return this.modelo;
    }

    public getAnio() {
        return this.anio;
    }

    public getColor() {
        return this.color;
    }

    public getChasis() {
        return this.chasis;
    }

    public getNuevo() {
        return this.nuevo;
    }

    public getPatente() {
        return this.patente;
    }

    public getVelocidad() {
        return this.velocidad;
    }

    public getDireccion() {
        return this.direccion;
    }

    public getPrendido() {
        return this.prendido;
    }

    /* OTRAS */
    public doblarDerecha() : void {
        this.direccion = "DERECHA";
    }

    public doblarIzquierda() : void {
        this.direccion = "IZQUIERDA";
    }

    public acelerar() : void {
        if (this.prendido) {
            this.velocidad++;
        }        
    }

    public frenar() : void {
        if (this.velocidad > 0) {
            this.velocidad--;
        }
    }
}

let auto1 = new auto ("FORD", "MONDEO", 2021, "Gris Plata", "45FG615KTR", false, "AE 456 FG", 0, "DERECHA", false);
let auto2 = new auto ("RENAULT", "DUSTER", 2022, "Blanco", "0378HD5G3PJ", true, "AF 486 JA", 0, "IZQUIERDA", false);
let auto3 = new auto ("NISSAN", "NOTE", 2015, "Rojo", "7977JHGH3324PLD", false, "PGH 678", 120, "DERECHA", true);

console.log("Datos del Auto 1: ", auto1);
console.log("Datos del Auto 2: ", auto2);
console.log("Datos del Auto 3: ", auto3);