import { Futbolista } from './futbolista';
import { Persona } from './persona';

export class Entrenador extends Persona {

    /* ATRIBUTOS */
    protected listaFutbolistas : Futbolista[];

    /* CONSTRUCTOR */
    public constructor(pNombre : string, pApellido : string, pEdad : number, pListaFutbolistas : Futbolista[]) {
        super(pNombre,pApellido,pEdad);
        this.listaFutbolistas = pListaFutbolistas;
    }

    /* SET */
    public setListaFutbolistas(pListaFutbolistas : Futbolista[]) : void {
        this.listaFutbolistas = pListaFutbolistas;
    }

    /* GET */
    public getListafutbolistas() : Futbolista[] {
        return this.listaFutbolistas;
    }

    /* OTROS */
    public entrenarFutbolista(pFutbolista : Futbolista) : void {
        pFutbolista.entrenar();
        console.log("El futbolista " + pFutbolista.getNombre() + " " + pFutbolista.getApellido() + " fué entrenado");
    }

    public jugarPartido() : void {
        for (let i : number = 0; i < this.listaFutbolistas.length; i++) {
            this.listaFutbolistas[i].convocado();
        }
        console.log("Se ha jugado un partido.");
    }

    public enviarADescansar(pFutbolista : Futbolista) : void {
        pFutbolista.descansar();
        console.log("El futbolista " + pFutbolista.getNombre() + " " + pFutbolista.getApellido() + " fué a descansar");
    }
}