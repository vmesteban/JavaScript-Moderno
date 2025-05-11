import './style.css';
import { App } from './todos/app.js';
import todoStore from '../src/store/todo.store.js';

todoStore.initStore();

App('#app');

