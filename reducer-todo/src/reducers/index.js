import React from "react";
import { ADD_TODO, TOGGLE_COMPLETED, CLEAR_COMPLETED } from "../actions";

export const initialState = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589
    }
  ]
};

export function reducer(state, action) {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        item: action.payload,
        completed: false,
        id: Date.now()
      };
      return {
        todos: [...state.todos, newTodo]
      };

    case TOGGLE_COMPLETED:
      //console.log('in TOGGLE_COMPLETED-action.payload', action.payload);
      return {
        //...state,
        todos: state.todos.map(todo => {
          console.log('in TOGGLE_COMPLETED', todo.id, action.payload, todo.completed)
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed
            };
          } else {
            return todo;
          }
        })
      };

      if (state.todos.id === action.payload) {
        return {};
      }

    case CLEAR_COMPLETED:
      const notCompleted = state.todos.filter(
        state.todos.completed !== action.payload
      );
      return {
        todos: [notCompleted]
      };
    default:
      return state;
  }
}
