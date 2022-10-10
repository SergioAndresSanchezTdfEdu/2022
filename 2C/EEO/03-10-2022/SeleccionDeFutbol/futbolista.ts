import { Persona } from './persona';

export class Futbolista extends Persona {

    /* ATRIBUTOS */
    protected numeroCamiseta : number;
    protected equipo : string;
    protected estadoFisico : number;

    /* CONSTRUCTOR */
    public constructor(pNombre : string, pApellido : string, pEdad : number, pNumeroCamiseta : number, pEquipo : string, pEstadoFisico : number) {
        super(pNombre,pApellido,pEdad);
        this.numeroCamiseta = pNumeroCamiseta;
        this.equipo = pEquipo;
        this.estadoFisico = pEstadoFisico;
    }

    /* SET */
    public setNumeroCamiseta(pNumeroCamiseta : number) : void {
        this.numeroCamiseta = pNumeroCamiseta;
    }

    public setEquipo(equipo : string) : void {
        this.equipo = equipo;
    }

    public setEstadoFisico(pEstadoFisico : number) : void {
        this.estadoFisico = pEstadoFisico;
    }

    /* GET */
    public getNumeroCamiseta() : number {
        return this.numeroCamiseta;
    }

    public getEquipo() : string {
        return this.equipo;
    }

    public getEstadoFisico() : number {
        return this.estadoFisico;
    }

    /* OTROS */

    public convocado() : void {
        if (this.estadoFisico >= 10) {
            this.estadoFisico -= 10;
        } else {
            this.estadoFisico = 0;
        }
        console.log('El Futbolista ha jugado el partido');
    }

    public entrenar() : void {
        if (this.estadoFisico >= 5) {
            this.estadoFisico -= 5;
        } else {
            this.estadoFisico = 0;
        }
    }

    public masajeado() : void {
        if (this.estadoFisico <= 90) {
            this.estadoFisico += 10;
        } else {
            this.estadoFisico = 100;
        }
    }

    public descansar() : void {
        if (this.estadoFisico <= 95) {
            this.estadoFisico += 5;
        } else {
            this.estadoFisico = 100;
        }
    }
}