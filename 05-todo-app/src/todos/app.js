import html from './app.html?raw';
import todoStore, { Filters } from '../store/todo.store.js';
import { renderTodos, renderPending } from './use-cases';

const ElementIDs = {
    ClearCompletedButton: '.clear-completed',
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    TodoFilters: '.filtro',
    PendingCountLabel: '#pending-count',
}

/**
 * 
 * @param {String} elementId 
 */

export const App = ( elementId ) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodos( ElementIDs.TodoList, todos );
        updatePendingCount(); 
    }

    const updatePendingCount = () => {
        renderPending(ElementIDs.PendingCountLabel);
    }

    // Cuando la función App(), se llama.
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html; // {{ name }} es un placeholder de html
        document.querySelector( elementId ).append( app );
        displayTodos( );
    })();

    // Referencias HTML
    const newDescriptionInput = document.querySelector( ElementIDs.NewTodoInput );
    const todoListUL = document.querySelector( ElementIDs.TodoList );
    const ClearCompletedButton = document.querySelector( ElementIDs.ClearCompletedButton );
    const filtersLIs = document.querySelectorAll( ElementIDs.TodoFilters );


    // Listeners
    newDescriptionInput.addEventListener('keyup', (event) => {

        if ( event.keyCode !== 13 ) return; // Si no es Enter, no hacer nada
        if ( event.target.value.trim().length === 0 ) return; // Si no hay texto, no hacer nada

        todoStore.addTodo( event.target.value );
        displayTodos();
        event.target.value = ''; // Limpiar el input

    });

    todoListUL.addEventListener('click', (event) => {
        const element = event.target.closest('[data-id]'); 
        todoStore.toggleTodo( element.getAttribute('data-id') ); // data-id="1234567890"
        displayTodos();

    });

    todoListUL.addEventListener('click', (event) => {
        const isDestroyElement = event.target.className === 'destroy';  
        const element = event.target.closest('[data-id]'); 
        if ( !isDestroyElement ) return; // Si no es el botón de eliminar, no hacer nada

        todoStore.deleteTodo( element.getAttribute('data-id') ); // data-id="1234567890"
        displayTodos(); 

    });

    ClearCompletedButton.addEventListener('click', () => {
        todoStore.deleteCompleted();
        displayTodos(); 
    });

    filtersLIs.forEach( element => {
        element.addEventListener('click', (element) => {
            filtersLIs.forEach( el => el.classList.remove('selected') );
            element.target.classList.add('selected');

            switch ( element.target.text ) {
                case 'Todos':
                    todoStore.setFilter( Filters.All );
                    break;
                case 'Pendientes':
                    todoStore.setFilter( Filters.Pending );
                    break;	
                case 'Completados':
                todoStore.setFilter( Filters.Completed );
                break;		  
            }

            displayTodos(); 
        }); 
    })    

}
