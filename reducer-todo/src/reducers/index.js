import React from "react";

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
    case 'ADD_TODO':
      return {
        todos: [
        ...state.todos,
        {item: action.payload,
          completed: false,
          id: Date.now()
          
        }]
        
      }
    default:
      return state;
  }
}
