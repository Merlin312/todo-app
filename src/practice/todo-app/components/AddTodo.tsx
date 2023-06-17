import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, sortTodo, upperCaseTodo } from '../actions';

const AddTodo = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch(addTodo(input));
    setInput('');
  };
  const handleSortTodo = () => {
    dispatch(sortTodo());
  };
  const handleUpperCase = () => {
    dispatch(upperCaseTodo());
  };
  return (
    <div>
      <button onClick={handleSortTodo}>Сортувати</button>
      <button onClick={handleUpperCase}>UpperCase</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Додати задачу</button>
      </form>
    </div>
  );
};

export default AddTodo;
