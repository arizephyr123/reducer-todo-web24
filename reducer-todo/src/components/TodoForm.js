import React, { useState } from "react";
import { ADD_TODO, CLEAR_COMPLETED } from "../actions";

const TodoForm = props => {
  console.log("TodoForm", props);
  const [newTodo, setNewTodo] = useState("");
  const handleChanges = e => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.dispatch({ type: ADD_TODO, payload: newTodo });
    setNewTodo("");
  };

  const clearCompleted = () => {
    props.dispatch({ type: CLEAR_COMPLETED });
  };

  return (
    <>
      <div>
        <input type="text" onChange={handleChanges} value={newTodo} />
        <button onClick={handleSubmit}>Add</button>
      </div>
      <div>
        <button onClick={clearCompleted}>Clear Completed</button>
      </div>
    </>
  );
};

export default TodoForm;
