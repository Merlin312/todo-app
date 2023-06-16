import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, sortTodo } from '../actions';

const AddTodo = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch(addTodo(input));
    setInput('');
  };
  const handleSort = () => {
    dispatch(sortTodo());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Додати задачу</button>
      <button onClick={handleSort}>Сортувати</button>
    </form>
  );
};

export default AddTodo;
