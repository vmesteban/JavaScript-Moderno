import { Todo } from '../models/todo.model.js';
import { createTodoHTML } from './create-todo-html.js';

let element;

/**
*  
* @param {string} elementId
* @param {Todo} todos
*/
export const renderTodos = ( elementId, todos = [] ) => {

    // TODO referencia
    if (!element) 
        element = document.querySelector( elementId );
    
    if (!element) throw new Error(`Element ${ elementId } not found`);

    element.innerHTML = ''; // Limpiar el HTML
    
    todos.forEach( todo => {
        element.append ( createTodoHTML( todo ) )
    });

}