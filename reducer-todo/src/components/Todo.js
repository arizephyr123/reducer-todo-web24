import React from 'react';

const Todo = props => {
    console.log(props);
    return(
        <li>
    {props.item}
        </li>
    )
};

export default Todo;
