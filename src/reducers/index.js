import { combineReducers } from "redux";
import {
  ADD_TASK,
  DELETE_TASK,
  SET_SORT_TYPE,
  SET_SORT_ORDER,
  UPDATE_FILTER,
  SortTypes,
  SortOrders,
} from "../actions";

function tasks(state = [], action) {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.task];
    case DELETE_TASK:
      return state.filter((task) => task.id !== action.id);
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

function sortOrder(state = SortOrders.ASC, action) {
  switch (action.type) {
    case SET_SORT_ORDER:
      return action.sortOrder;
    default:
      return state;
  }
}

function sortType(state = SortTypes.ALPHABETICAL, action) {
  switch (action.type) {
    case SET_SORT_TYPE:
      return action.sortType;
    default:
      return state;
  }
}

const root = combineReducers({
  tasks,
  filter,
  sortType,
  sortOrder,
});

export default root;
