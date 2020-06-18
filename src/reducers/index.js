import { combineReducers } from 'redux'
import {
    ADD_TASK,
    DELETE_TASK,
    SET_SORT_FIELD,
    SET_SORT_ORDER,
    UPDATE_FILTER,
    SortFields,
    SortOrders
} from '../actions';

function tasks(state = [], action) {
    switch (action.type) {
        case ADD_TASK:
            return [...state, action.task];
        case DELETE_TASK:
            return state.filter(task => task.id !== action.id);
        default:
            return state;
    }
}

function filter(state = "", action) {
    switch (action.type) {
        case UPDATE_FILTER:
            return action.filter;
        default:
            return state;
    }
}

const root = combineReducers({
    tasks,
    filter
})

export default root;