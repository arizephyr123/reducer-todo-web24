import React from 'react';

const Todo = props => {
    console.log(props);

    const toggleCompleted = e => {
//dispatch({ type: })
    };

    return(
        <li onClick={toggleCompleted}>
    {props.item}
        </li>
    )
};

export default Todo;
