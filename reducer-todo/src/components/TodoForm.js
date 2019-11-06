import React, { useReducer, useState } from 'react';
import { initialState, reducer } from '../reducers';
import { ADD_TODO } from '../actions';

const TodoForm = props => {
console.log('TodoForm', props)
const [newTodo, setNewTodo] = useState('');
const handleChanges = e => {
setNewTodo(e.target.value);
};

const handleSubmit = e => {
    e.preventDefault();
    props.dispatch({type: ADD_TODO, payload: newTodo});
    setNewTodo('');

}
    return(
        <div>
        <input
        type="text"
        onChange={handleChanges}
        value={newTodo}
        />
        <button onClick={handleSubmit}>Add</button>
</div>
    )
};

export default TodoForm;