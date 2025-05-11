import { v4 as uuid } from 'uuid';


/**
 * @param {String} descripcion
 */

export class Todo {

    constructor( descripcion ) {
        this.id = uuid();
        this.description = descripcion;
        this.done = false;
        this.createdAt = new Date();
    }
}