const TodoForm = ({ inputValue, setTodos, setInputValue, todos }) => {
  const handleAddTodos = () => {
    setTodos([...todos, inputValue]);
    setInputValue('');
  };
  const handleChangeValue = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <input
        value={inputValue}
        onChange={handleChangeValue}
        placeholder="write something.."
      />
      <button onClick={handleAddTodos}>Add</button>
    </div>
  );
};
export default TodoForm;
