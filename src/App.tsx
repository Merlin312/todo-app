import './App.css';
import AddTodo from './practice/todo-app/components/AddTodo';
import Buttons from './practice/todo-app/components/Buttons';
import TodoList from './practice/todo-app/components/TodoList';

const App = (props) => {
  setInterval(() => {
    console.clear();
  }, 60000);
  const state = props;
  // console.log(state);
  return (
    <div>
      <Buttons state={state} />
      <h1>Список задач</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};
export default App;
