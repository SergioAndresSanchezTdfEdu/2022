import { Mamifero } from "./mamifero";

export class Carnivoro extends Mamifero {

        /* ATRIBUTOS */
        private comeAnimales : string[];

        /* CONSTRUCTOR */
        public constructor(pCantidadPatas : number, pComeAnimales : string[]) {
            super(pCantidadPatas);
            this.comeAnimales = pComeAnimales;
        }
        /* SET */
        public setComeAnimales(pComeAniamles : string[]) {
            this.comeAnimales = pComeAniamles;
        }
        
        /* GET */
        public getComeAnimales() : string[] {
            return this.comeAnimales;
        }
    
        /* OTROS */
        public comer() : void {
            console.log("Comer Carne.");
        }
}