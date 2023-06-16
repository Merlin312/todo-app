import './App.css';
import AddTodo from './practice/todo-app/components/AddTodo';
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
