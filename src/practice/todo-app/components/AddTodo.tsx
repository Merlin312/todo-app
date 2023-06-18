import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions';
import '../../../App.css';

const AddTodo = (props) => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const theme = props.theme;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch(addTodo(input, 2));
    setInput('');
  };
  const color = theme === 'on' ? '#200526' : 'aquamarine';

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="inp"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="введіть завдання"
        />
        <button
          style={{
            color: color,
          }}
          className="btnAddTodo"
          type="submit"
        >
          +
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
