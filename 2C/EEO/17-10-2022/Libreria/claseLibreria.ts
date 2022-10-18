import { Cliente } from "./claseCliente";
import { Revista } from "./claseRevista";
import { Libro } from "./claseLibro";
import { Padre } from "./clasePadre";

export class Libreria {
    private listaClientes:Cliente[];
    private listaLibros:Libro[];
    private listaRevistas:Revista[];

    public constructor(pListaClientes:Cliente[],pListaLibros:Libro[],pListaRevista:Revista[]) {
        this.listaClientes=pListaClientes;
        this.listaLibros=pListaLibros;
        this.listaRevistas=pListaRevista;
    }
    setRevista(nuevaRevista:Revista):void{
        this.listaRevistas.push(nuevaRevista);
    }
    setLibro(nuevoLibro:Libro):void{
        this.listaLibros.push(nuevoLibro);
    }
    setCliente(nuevoCliente:Cliente):void{
        this.listaClientes.push(nuevoCliente);
    }
    calcularPrecio(cliente:Cliente,articulo:Padre):number{
        let precioConDescuento:number=0;
        precioConDescuento=articulo.getPrecio()*(1-cliente.getDescuento());
        return precioConDescuento;
    } 
    conocerLibroRevistaComprado(cliente:Cliente,articulo:Padre):boolean{
        let librosComprados:Libro[] = cliente.getListLibrosComprados();
        let revistasCompradas:Revista[] = cliente.getListRevistasCompradas();
        let flag:boolean = false;

        for (let i = 0; i < librosComprados.length; i++) {
            if (librosComprados[i].getTitulo() === articulo.getTitulo()) {
                flag = true;
            }
        }

        if (!flag) {
            for (let i = 0; i < revistasCompradas.length; i++) {
                if (revistasCompradas[i].getTitulo() === articulo.getTitulo()) {
                    flag = true;
                }
            }
        }

        return flag;
    }
    conocerSiGustaLibro(cliente:Cliente,libro:Libro):boolean{
        let listaLibroFav = cliente.getListLibrosFav();

        for (let i = 0; i < listaLibroFav.length; i++) {
            if (listaLibroFav[i].getTitulo() === libro.getTitulo()) {
                return true;
            }
        }

        return false;
    }
}