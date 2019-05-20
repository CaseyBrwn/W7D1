import React from 'react';
import ReactDOM from 'react-dom';
import configStore from './store/store';
import { receiveTodos, receiveTodo } from './actions/todo_action';
import { clearAll } from './actions/todo_action';
import Root from './components/root';
import { allTodos } from './reducers/selectors';


window.store = configStore;
window.receiveTodos = receiveTodos;
window.clearAll = clearAll;
window.receiveTodo = receiveTodo;
window.allTodos = allTodos;


document.addEventListener('DOMContentLoaded', () => {

    ReactDOM.render(<Root store={configStore} />, document.getElementById('main'));
});



export default Root;