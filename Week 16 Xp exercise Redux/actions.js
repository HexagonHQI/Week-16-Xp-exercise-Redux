// src/actions/actions.js
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionTypes';

// Action creator for adding a todo
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text }
});

// Action creator for toggling a todo
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id }
});

// Action creator for removing a todo
export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id }
});
