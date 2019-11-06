import React from "react";
import { ADD_TODO, TOGGLE_COMPLETED } from "../actions";

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
    // case TOGGLE_COMPLETED:
    //   return {
    //     todos: [
    //       ...state.todos,
    //       { completed: !completed }
    //     ]
    //   };
    default:
      return state;
  }
}
