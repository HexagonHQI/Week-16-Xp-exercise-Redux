// src/store.js
import { createStore } from 'redux';
import todoReducer from './reducers/todoReducer';

// Create a Redux store
const store = createStore(todoReducer);

export default store;
