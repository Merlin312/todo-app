import './App.css';
import TodoList from './practice/todo-app/components/TodoList';

const App = () => {
  setInterval(() => {
    console.clear();
  }, 60000);
  return (
    <div>
      <h1>Something!</h1>
      <TodoList />
    </div>
  );
};
export default App;
