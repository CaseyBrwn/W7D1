import { merge } from "lodash";
import { RECEIVE_TODOS, RECEIVE_TODO} from "../actions/todo_action";
import CLEAR_ALL from "../actions/todo_action";

const initialState = {
    1: {
        id: 1,
        title: 'wash car',
        body: 'with soap',
        done: false
    },
    2: {
        id: 2,
        title: 'wash dog',
        body: 'with shampoo',
        done: true
    },
};

const todosReducer = (state = initialState, action) => {
    Object.freeze(state);
    switch(action.type) {

        case RECEIVE_TODOS:
            const {todos} = action;
            const newTodos = {};
            todos.forEach (todo => {
                newTodos[todo.id] = todo;
            });
            const newState = merge({}, state, newTodos);
            return newState;

        case RECEIVE_TODO:
            const todo = action.todo;
            const newTodo = {
                [todo.id]: todo
            };
            const newState2 = merge({}, state, newTodo);
            return newState2;

        case CLEAR_ALL:
            return {};

        default: return state;
    }
};


export default todosReducer;