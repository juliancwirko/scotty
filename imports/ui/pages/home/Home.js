import React from 'react';
import {connect} from 'react-redux';
import Todo from '../../components/todo-item/Todo';

import {callAddTodo} from '../../../api/redux/async-actions';

let Home = (props) => {
    const {todos, callAddTodo} = props;
    const handleAddTodo = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            callAddTodo(e.target.value);
            e.target.value = '';
        }
    };
    return (
        <div className='todo-wrapper'>
            <div>
                <input type='text' className='add-todo-input' placeholder='Add todo item ...' onKeyPress={handleAddTodo} />
            </div>
            <div>
                {todos.map((t, i) => <Todo todoId={t._id} message={t.message} finished={t.finished} key={i} />)}
            </div>
        </div>
    )
}

Home = connect(
    function mapStateToProps(state) {
        return {
            todos: state.todos
        };
    },
    function mapDispatchToProps(dispatch) {
        return {
            callAddTodo: data => dispatch(callAddTodo(data))
        };
    }
)(Home);

export default Home;