import './App.css';
import PracticeTry from './practice/js-practice/PracticeTry';

const App = () => {
  setInterval(() => {
    console.clear();
  }, 60000);
  return (
    <div>
      {/* <h1>Something</h1> */}
      <PracticeTry />
    </div>
  );
};
export default App;
