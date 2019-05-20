import todos from './todos_reducer';
import { combineReducers } from 'redux';

const rootReducers = combineReducers ({
    todos
});

export default rootReducers;