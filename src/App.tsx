import './App.css';
import FormPractice from './js-practice/FormPractice';

const App = () => {
  setInterval(() => {
    console.clear();
  }, 30000);
  return (
    <div>
      {/* <h1>Додаток для лічильника кліків</h1> */}
      <FormPractice />
    </div>
  );
};
export default App;
