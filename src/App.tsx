import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import AddTodo from './practice/todo-app/components/AddTodo';
import Buttons from './practice/todo-app/components/Buttons';
import TodoList from './practice/todo-app/components/TodoList';
import RemoveAll from './practice/todo-app/components/buttons/RemoveAll';
import { useEffect } from 'react';
import { initTodos } from './practice/todo-app/actions';

const App = () => {
  setInterval(() => {
    console.clear();
  }, 60000);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initTodos()); // диспатчимо дію для ініціалізації todo
  }, []);

  const theme = useSelector((state) => state.themes);
  const todos = useSelector((state) => state.todos.length);
  // console.log(todos);

  return (
    <div className="global">
      <Buttons />
      <h1>Список задач</h1>
      <AddTodo theme={theme} />
      <TodoList />
      {todos >= 5 ? <RemoveAll theme={theme} /> : null}
    </div>
  );
};
export default App;
