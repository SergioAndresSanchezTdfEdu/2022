export class Persona {

    /* ATRIBUTOS */
    protected nombre : string;
    protected apellido : string;
    protected edad : number;

    /* CONSTRUCTOR */
    public constructor(pNombre : string, pApellido : string, pEdad : number) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.edad = pEdad;
    }

    /* SET */
    public setNombre(pNombre : string) : void {
        this.nombre = pNombre;
    }

    public setApellido(pApellido : string) : void{
        this.apellido = pApellido;
    }

    public setEdad(pEdad : number) : void {
        this.edad = pEdad;
    }

    /* GET */
    public getNombre() : string {
        return this.nombre;
    }

    public getApellido() : string {
        return this.apellido;
    }

    public getEdad() : number {
        return this.edad;
    }

    /* OTROS */
}