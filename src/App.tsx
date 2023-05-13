import './App.css';
import PracticeClass from './practice/js-practice/PracticeClass';

const App = () => {
  setInterval(() => {
    console.clear();
  }, 60000);
  return (
    <div>
      {/* <h1>Something</h1> */}
      <PracticeClass />
    </div>
  );
};
export default App;
