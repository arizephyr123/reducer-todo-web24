import React, { useReducer } from 'react';
import { initialState, reducer } from '../reducers';
import { ADD_TODO } from '../actions';

const TodoForm = () => {
const [state, dispatch] = useReducer(reducer, initialState);
console.log('TodoForm', state)
    return(
        <div>
        <input
        type="text"
        // value={}
        />
        <button onClick={() => dispatch({type: ADD_TODO})}>Add</button>
</div>
    )
};

export default TodoForm;