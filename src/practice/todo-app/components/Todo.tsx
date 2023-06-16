import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../actions';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li
      onClick={() => dispatch(toggleTodo(todo.id))}
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
      }}
    >
      {todo.content}
    </li>
  );
};

export default Todo;
