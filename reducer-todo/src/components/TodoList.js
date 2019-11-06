import React, { useReducer } from "react";
import { reducer, initialState } from "../reducers";

//Components
import Todo from "./Todo";

const TodoList = () => {
  const [{ todos }, dispatch] = useReducer(reducer, initialState);
  console.log(todos);
  return (
    <ul>
      {todos.map(item => (
        <Todo key={item.id} {...item}/>
      ))}
    </ul>
  );
};

export default TodoList;
