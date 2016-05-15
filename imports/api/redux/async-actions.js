import { Meteor } from 'meteor/meteor';
import { addTodo, getAllTodo, removeTodo, editTodo } from './actions';
import { todosGetAll, todosAdd, todosEdit, todosRemove } from '../todos/methods';

export function callAddTodo(message) {
  return dispatch => todosAdd.call({ message }, (err, result) => {
    if (err) {
      throw new Meteor.Error(err.message);
    } else {
      dispatch(addTodo({ _id: result, message }));
    }
  });
}

export function callGetAllTodo() {
  return dispatch => todosGetAll.call({}, (err, result) => {
    if (err) {
      throw new Meteor.Error(err.message);
    } else {
      dispatch(getAllTodo(result));
    }
  });
}

export function callRemoveTodo(_id) {
  return dispatch => todosRemove.call({ todoId: _id }, (err) => {
    if (err) {
      throw new Meteor.Error(err.message);
    } else {
      dispatch(removeTodo(_id));
    }
  });
}

export function callEditTodo(_id) {
  return dispatch => todosEdit.call({ todoId: _id }, (err) => {
    if (err) {
      throw new Meteor.Error(err.message);
    } else {
      dispatch(editTodo(_id));
    }
  });
}
