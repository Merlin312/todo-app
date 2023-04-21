import { useState } from 'react';

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleAddTodos = () => {
    setTodos([...todos, inputValue]);
    setInputValue('');
  };
  const handelRemove = (indexRemove) => {
    const removeValue = [...todos];
    removeValue.splice(indexRemove, 1);
    setTodos(removeValue);
  };
  return (
    <div>
      <input value={inputValue} onChange={handleChange} />
      <button onClick={handleAddTodos}>Add</button>
      <h1>Todos:</h1>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              {todo}
              <button onClick={() => handelRemove(index)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Todos;
