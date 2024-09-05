// src/reducers/todoReducer.js
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../actions/actionTypes';

// Define the initial state
const initialState = {
  todos: []
};

// Reducer function
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(), // Use a timestamp as a unique ID
            text: action.payload.text,
            completed: false
          }
        ]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      };
    default:
      return state;
  }
};

export default todoReducer;
