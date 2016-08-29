import React from 'react';
import { connect } from 'react-redux';
import { callRemoveTodo, callEditTodo } from '../../../api/redux/async-actions';

const Todo = (props) => {
  const { message, todoId, dispatchCallRemoveTodo, dispatchCallEditTodo, finished } = props;
  const handleRemove = () => {
    dispatchCallRemoveTodo(todoId);
  };
  const handleEdit = () => {
    dispatchCallEditTodo(todoId);
  };
  const finishedClass = () => {
    if (finished) {
      return 'todo-item todo-finished';
    }
    return 'todo-item';
  };
  return (
    <div className={finishedClass()}>
      <input type="checkbox" checked={finished} onChange={handleEdit} />
      {message}
      <button type="button" onClick={handleRemove}>
        <i className="fa fa-times"></i>
      </button>
    </div>
  );
};

Todo.propTypes = {
  message: React.PropTypes.string.isRequired,
  todoId: React.PropTypes.string.isRequired,
  dispatchCallRemoveTodo: React.PropTypes.func.isRequired,
  dispatchCallEditTodo: React.PropTypes.func.isRequired,
  finished: React.PropTypes.bool,
};

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  dispatchCallRemoveTodo: _id => dispatch(callRemoveTodo(_id)),
  dispatchCallEditTodo: _id => dispatch(callEditTodo(_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
