import { Mamifero } from "./mamifero";

export class Herbivoro extends Mamifero {

        /* ATRIBUTOS */
        private plantas : string[];

        /* CONSTRUCTOR */
        public constructor(pCantidadPatas : number, pPlantas : string[]) {
            super(pCantidadPatas);
            this.plantas = pPlantas;
        }
    
        /* SET */
        public setPlantas(pPlantas : string[]) {
            this.plantas = pPlantas;
        }
    
        /* GET */
        public getPlantas() : string[] {
            return this.plantas;
        }

        /* OTROS */
        public comer() : void {
            console.log("Comer Hiervas.");
        }
}