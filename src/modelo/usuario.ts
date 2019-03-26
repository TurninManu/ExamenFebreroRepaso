import { Asignatura } from './asignatura';
export class Usuario{
    constructor(public id:number,public nombre:string, public apellidos:string, 
        public usuario:string, public clave:string, public asignaturas:Array<Asignatura>){}
    
}