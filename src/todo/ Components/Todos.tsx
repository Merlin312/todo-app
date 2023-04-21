import { useState } from 'react';

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = () => {
    setTodos([...todos, inputValue]);
    setInputValue('');
  };

  const handleDelete = (deleteIndex) => {
    const deleteTodo = [...todos];
    deleteTodo.splice(deleteIndex, 1);
    setTodos(deleteTodo);
  };
  return (
    <div>
      <input value={inputValue} placeholder="write.." onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
      <h1>Todos: </h1>
      <ul>
        {todos.map((el, i) => {
          return (
            <li key={i}>
              {el}
              <button onClick={() => handleDelete(i)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Todos;
