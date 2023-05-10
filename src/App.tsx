import './App.css';
import SayHelloName from './js-practice/SayHelloName';

const App = () => {
  const name = 'Ivan';
  return (
    <div>
      {/* <h1>Something</h1> */}
      <SayHelloName name={name} />
    </div>
  );
};
export default App;
