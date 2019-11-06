import React from "react";
import { TOGGLE_COMPLETED } from "../actions";

const Todo = props => {
  //console.log(props);

  const toggleCompleted = id => {
    props.dispatch({ type: TOGGLE_COMPLETED, payload: props.id });
  };

  return <li 
  onClick={toggleCompleted}
  className={`${props.completed ? "completed" : ""}`}
  >{props.item}</li>;
};

export default Todo;
