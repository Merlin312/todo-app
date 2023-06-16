import './App.css';
import TodoList from './practice/todo-app/components/TodoList';

const App = () => {
  setInterval(() => {
    console.clear();
  }, 60000);
  return (
    <div>
      <h1>Список задач</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};
export default App;
