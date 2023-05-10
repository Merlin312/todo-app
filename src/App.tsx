import './App.css';
import PracticeCounter from './js-practice/PracticeCounter';

const App = () => {
  setInterval(() => {
    console.clear();
  }, 30000);
  return (
    <div>
      <h1>Додаток для лічильника кліків</h1>
      <PracticeCounter intialValue={0} />
    </div>
  );
};
export default App;
