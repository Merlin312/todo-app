import { useSelector } from 'react-redux';
import './App.css';
import AddTodo from './practice/todo-app/components/AddTodo';
import Buttons from './practice/todo-app/components/Buttons';
import TodoList from './practice/todo-app/components/TodoList';
import RemoveAll from './practice/todo-app/components/buttons/RemoveAll';

const App = () => {
  setInterval(() => {
    console.clear();
  }, 60000);

  const theme = useSelector((state) => state.themes);
  console.log(theme);

  return (
    <div className="global">
      <Buttons />
      <h1>Список задач</h1>
      <AddTodo />
      <TodoList />
      <RemoveAll theme={theme} />
    </div>
  );
};
export default App;
