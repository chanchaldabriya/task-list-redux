// actions
export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const SET_SORT_FIELD = "SET_SORT_FIELD";
export const SET_SORT_ORDER = "SET_SORT_ORDER";
export const UPDATE_FILTER = "UPDATE_FILTER";

// local variable
let nextTaskId = 0;

// action creators
export function addTask(task) {
  return { type: ADD_TASK, task: { ...task, id: nextTaskId++ } };
}
export function deleteTask(id) {
  return { type: DELETE_TASK, id };
}
export function updateFilter(filter) {
  return { type: UPDATE_FILTER, filter };
}

// others
export const SortFields = {
  ALPHABETICAL: "ALPHABETICAL",
  START_DATE: "START_DATE",
  END_DATE: "END_DATE",
};
export const SortOrders = {
  ASC: "ASC",
  DESC: "DESC",
};
