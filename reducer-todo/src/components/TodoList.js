import React, { useReducer } from "react";
import { reducer, initialState } from "../reducers";

//Components
import TodoForm from './TodoForm';
import Todo from "./Todo";


const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <>
      <TodoForm state={state} dispatch={dispatch}/>
      <div>
        <ul>
          {state.todos.map(item => (
            <Todo key={item.id} {...item} dispatch={dispatch} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
