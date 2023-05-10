import { useState } from 'react';

const PracticeTodo = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');
  const handleAddTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, value]);
    setValue('');
  };
  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Todo:</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{todo}</td>
              <td>
                <button onClick={() => handleDeleteTodo(index)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={handleAddTodo}>
        <label>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">Add todo</button>
        </label>
      </form>
    </div>
  );
};
export default PracticeTodo;
