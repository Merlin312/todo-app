import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../actions';
import './Todo.css';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleDelete = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <div className="todo-container">
      <li onClick={handleClick} className={todo.completed ? 'completed' : ''}>
        {todo.content}
      </li>
      <button className="delete-button" onClick={handleDelete}>
        X
      </button>
    </div>
  );
};

export default Todo;
