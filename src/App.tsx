import './App.css';
import PracticeTodoList from './js-practice/PracticeTodoList';

const App = () => {
  setInterval(() => {
    console.clear();
  }, 30000);
  return (
    <div>
      {/* <h1>Додаток для лічильника кліків</h1> */}
      <PracticeTodoList />
    </div>
  );
};
export default App;
