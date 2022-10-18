import { Libro } from "./claseLibro";
import { Revista } from "./claseRevista";

export class Cliente {
    private nombre:string;
    private apellido:string;
    private DNI:number;
    private direccion:string;
    private listAutorFav:string[];
    private listGenFav:string[];
    private descuento:number;
    private listLibrosComprados:Libro[];
    private listRevistasCompradas:Revista[];
    private listLibrosFav:Libro[];

    public constructor(pNombre:string,pApellido:string,pDNI:number,pDireccion:string,pListAutorFav:string[],pListGenFav:string[],pDescuento:number,pListLibrosComprados:Libro[],pListRevistasCompradas:Revista[],pListLibrosFav:Libro[]){
        this.nombre=pNombre;
        this.apellido=pApellido;
        this.DNI=pDNI;
        this.direccion=pDireccion;
        this.listAutorFav=pListAutorFav;
        this.listGenFav=pListGenFav;
        this.descuento=pDescuento;
        this.listLibrosComprados=pListLibrosComprados;
        this.listRevistasCompradas=pListRevistasCompradas;
        this.listLibrosFav=pListLibrosFav;
    }
    getNombre():string{
        return this.nombre;
    }
    getApellido():string{
        return this.apellido;
    }
    getDNI():number{
        return this.DNI;
    }
    getDireccion():string{
        return this.direccion;
    }
    getListaAutoresFavoritos():string[] {
        return this.listAutorFav;
    }
    getListaGeneroFavoritos():string[]{
        return this.listGenFav;
    }
    getDescuento():number{
        return this.descuento;
    }
    getListLibrosComprados():Libro[] {
        return this.listLibrosComprados;
    }
    getListRevistasCompradas():Revista[] {
        return this.listRevistasCompradas;
    }
    getListLibrosFav():Libro[] {
        return this.listLibrosFav;
    }
}