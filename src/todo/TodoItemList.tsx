const TodoItemList = ({ todos, setTodos }) => {
  const handleRemoveTodo = (removeIndex) => {
    const removeTodo = [...todos];
    removeTodo.splice(removeIndex, 1);
    setTodos(removeTodo);
  };
  return (
    <div>
      <h1>Список справ:</h1>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              {todo} <button onClick={() => handleRemoveTodo(index)}>x</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default TodoItemList;
