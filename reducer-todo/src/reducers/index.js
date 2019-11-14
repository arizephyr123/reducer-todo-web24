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
      return {
        todos: state.todos.map(todo => {
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

    case CLEAR_COMPLETED:
      return {
        todos: state.todos.filter(item => item.completed === false)
      };
    default:
      return state;
  }
}
