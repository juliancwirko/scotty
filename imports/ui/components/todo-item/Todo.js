import React from 'react';
import {connect} from 'react-redux';
import {callRemoveTodo, callEditTodo} from '../../../api/redux/async-actions';

let Todo = (props) => {
    const {message, todoId, callRemoveTodo, callEditTodo, finished} = props;
    const handleRemove = (e) => {
        callRemoveTodo(todoId);
    };
    const handleEdit = (e) => {
        callEditTodo(todoId);
    };
    const finishedClass = () => {
        if (finished) {
            return 'todo-item todo-finished';
        }
        return 'todo-item';
    };
    return  (
        <div className={finishedClass()}>
            <input type='checkbox' checked={finished} value='' onChange={handleEdit} />
            {message}
            <button type='button' onClick={handleRemove}>
                <i className='fa fa-times'></i>
            </button>
        </div>
    )
}

Todo = connect(
    function mapStateToProps() {
        return {};
    },
    function mapDispatchToProps(dispatch) {
        return {
            callRemoveTodo: _id => dispatch(callRemoveTodo(_id)),
            callEditTodo: _id => dispatch(callEditTodo(_id))
        };
    }
)(Todo);

export default Todo;