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
    const updatedTodo = todos.filter((_, i) => i !== index);
    setTodos(updatedTodo);
  };

  setInterval(() => {
    console.clear();
  }, 35000);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Todo:</th>
            <th>X</th>
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
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="write your todo.."
        />
        <button type="submit">Add todo</button>
      </form>
    </div>
  );
};
export default PracticeTodo;
