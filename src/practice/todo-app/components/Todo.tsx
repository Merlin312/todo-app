import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTodo, removeTodo } from '../actions';
import './Todo.css';

const Todo = ({ todo }) => {
  const theme = useSelector((state) => state.themes);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleDelete = () => {
    dispatch(removeTodo(todo.id));
  };
  const color = theme === 'on' ? '#200526' : 'aquamarine';

  return (
    <div className="todo-container">
      <li onClick={handleClick} className={todo.completed ? 'completed' : ''}>
        {todo.content}
      </li>
      <button
        style={{ color: color }}
        className="delete-button"
        onClick={handleDelete}
      >
        X
      </button>
    </div>
  );
};

export default Todo;
