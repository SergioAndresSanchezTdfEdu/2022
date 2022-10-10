import { Mamifero } from "./mamifero";

export class Omnivoro extends Mamifero {

        /* ATRIBUTOS */
        private comeTodo : string[];

        /* CONSTRUCTOR */
        public constructor(pCantidadPatas : number, pComeTodo : string[]) {
            super(pCantidadPatas);
            this.comeTodo = pComeTodo;
        }

        /* SET */
        public setComeTodo(pComeTodo : string[]) {
            this.comeTodo = pComeTodo;
        }
    
        /* GET */
        public getComeTodo() : string[] {
            return this.comeTodo;
        }

        /* OTROS */
        public comer() : void {
            console.log("Comer de todo.");
        }
}