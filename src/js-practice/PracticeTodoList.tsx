import { useState } from 'react';

const PracticeTodoList = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');

  const handleAddTodo = () => {
    setTodos([...todos, value]);
    setValue('');
  };

  const handleDeleteTodo = (index) => {
    const filterTodo = todos.filter((_, i) => i !== index);
    setTodos(filterTodo);
  };
  return (
    <div>
      <h1>Todo List</h1>
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
      <input
        type="text"
        onChange={(event) => setValue(event.target.value)}
        placeholder="write your task.."
        value={value}
      />
      <button onClick={handleAddTodo}>Add todo</button>
    </div>
  );
};
export default PracticeTodoList;
