import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../actions';
import './Todo.css';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleTodo(todo.id));
  };

  return (
    <div className="todo-container">
      <li onClick={handleClick} className={todo.completed ? 'completed' : ''}>
        {todo.content}
      </li>
      <button
        className="delete-button"
        onClick={(e) => {
          e.stopPropagation();
          // Handle delete button click
        }}
      >
        X
      </button>
    </div>
  );
};

export default Todo;
