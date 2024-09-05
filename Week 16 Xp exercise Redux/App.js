// src/App.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from './actions/actions';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo onAdd={handleAddTodo} />
      <TodoList
        todos={todos}
        onToggle={handleToggleTodo}
        onRemove={handleRemoveTodo}
      />
    </div>
  );
};

export default App;
