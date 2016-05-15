import React from 'react';
import { connect } from 'react-redux';
import Todo from '../../components/todo-item/Todo';

import { callAddTodo } from '../../../api/redux/async-actions';

const Home = (props) => {
  const { todos, dispatchCallAddTodo } = props;
  const handleAddTodo = (e) => {
    if (e.key === 'Enter') {
      const elem = e.target;
      e.preventDefault();
      dispatchCallAddTodo(elem.value);
      elem.value = '';
    }
  };
  return (
    <div className="todo-wrapper">
      <div>
        <input
          type="text"
          className="add-todo-input"
          placeholder="Add todo item ..."
          onKeyPress={handleAddTodo}
        />
      </div>
      <div>
        {todos.map((t, i) => <Todo
          todoId={t._id}
          message={t.message}
          finished={t.finished}
          key={i}
        />)}
      </div>
    </div>
  );
};

Home.propTypes = {
  todos: React.PropTypes.array.isRequired,
  dispatchCallAddTodo: React.PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ todos: state.todos });
const mapDispatchToProps = (dispatch) => ({
  dispatchCallAddTodo: data => dispatch(callAddTodo(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
