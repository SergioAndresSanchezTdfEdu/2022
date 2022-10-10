import { Futbolista } from './futbolista';
import { Persona } from './persona';

export class Masajista extends Persona {

    /* ATRIBUTOS */
    protected tipoMasajista : string;

    /* CONSTRUCTOR */
    public constructor(pNombre : string, pApellido : string, pEdad : number, pTipoMasajista : string) {
        super(pNombre,pApellido,pEdad);
        this.tipoMasajista = pTipoMasajista;
    }

    /* SET */
    public setTipoMasajista(pTipoMasajista : string) : void {
        this.tipoMasajista = pTipoMasajista;
    } 

    /* GET */
    public getTipoMasajista() : string {
        return this.tipoMasajista;
    }

    /* OTROS */
    public darMasaje(pFutbolista : Futbolista) : void {
        pFutbolista.masajeado();
        console.log('El futbolista' + pFutbolista.getNombre() + ' ' + pFutbolista.getApellido() + ' ha recibido su masaje');
    }
}