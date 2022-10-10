import { Entrenador } from "./entrenador";
import { Futbolista } from "./futbolista";
import { Masajista } from "./masajista";

export class SeleccionDeFutbol {

    /* ATRIBUTOS */
    protected nombreEquipo : string;
    protected pais : string;
    protected entrenador : Entrenador;
    protected masajista : Masajista;
    protected listaFutbolistas : Futbolista[];

    /* CONSTRUCTOR */
    public constructor(pNombreEquipo : string, pPais : string, pEntrenador : Entrenador, pMasajista : Masajista, pListaFutbolistas : Futbolista[]) {
        this.nombreEquipo = pNombreEquipo;
        this.pais = pPais;
        this.entrenador = pEntrenador;
        this.masajista = pMasajista;
        this.listaFutbolistas = pListaFutbolistas;
    }

    /* SET */
    public setNombreEquipo(pNombreEquipo : string) : void {
        this.nombreEquipo = pNombreEquipo;
    }

    public setPais(pPais : string) : void {
        this.pais = pPais;
    }

    public setEntrenador(pEntrenador : Entrenador) : void {
        this.entrenador = pEntrenador;
    }

    public setMasajista(pMasajista : Masajista) : void{
        this.masajista = pMasajista;
    }

    public setListaFutbolistas(pListaFutbolistas : Futbolista[]) : void {
        this.listaFutbolistas = pListaFutbolistas;
    }

    /* GET */
    public getNombreEquipo() : string {
        return this.nombreEquipo;
    }

    public getPais() : string {
        return this.pais;
    }

    public getEntrenador() : Entrenador {
        return this.entrenador;
    }

    public getMasajista() : Masajista {
        return this.masajista;
    }

    public getListaFutbolistas() : Futbolista[] {
        return this.listaFutbolistas;
    }

    /* OTROS */

    public agregarFutbolista(pFutbolista : Futbolista) : void{
        this.listaFutbolistas.push(pFutbolista);
        console.log("El futbolista " + pFutbolista.getNombre() + " " + pFutbolista.getApellido() + " fué agregado al plantel");
    }

    public despedirFutbolista(pFutbolista : Futbolista) : void {
        for (let i : number = 0; i < this.listaFutbolistas.length; i++) {
            if ((pFutbolista.getNombre() === this.listaFutbolistas[i].getNombre()) && (pFutbolista.getApellido() === this.listaFutbolistas[i].getApellido())) {
                this.listaFutbolistas.splice(i, 1);
                console.log("El futbolista " + pFutbolista.getNombre() + " " + pFutbolista.getApellido() + " fué despedido del plantel");
            }
        }
    }

}