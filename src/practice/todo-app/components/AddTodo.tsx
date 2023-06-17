import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions';
import '../../../App.css';

const AddTodo = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch(addTodo(input));
    setInput('');
  };

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
        <button className="addTodo" type="submit">
          +
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
