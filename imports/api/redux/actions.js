/*
* action types
*/

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const GET_ALL_TODO = 'GET_ALL_TODO';

/*
* action creators
*/

export function addTodo(data) {
  return {
    type: ADD_TODO,
    data,
  };
}

export function removeTodo(_id) {
  return {
    type: REMOVE_TODO,
    _id,
  };
}

export function editTodo(_id) {
  return {
    type: EDIT_TODO,
    _id,
  };
}

export function getAllTodo(data) {
  return {
    type: GET_ALL_TODO,
    data,
  };
}
