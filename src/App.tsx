import './App.css';
import PracticeButton from './js-practice/PracticeButton';

const App = () => {
  setInterval(() => {
    console.clear();
  }, 30000);
  return (
    <div>
      {/* <h1>Додаток для лічильника кліків</h1> */}
      <PracticeButton />
    </div>
  );
};
export default App;
