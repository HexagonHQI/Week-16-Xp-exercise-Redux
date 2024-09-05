// src/components/TodoItem.js
import React from 'react';

const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
