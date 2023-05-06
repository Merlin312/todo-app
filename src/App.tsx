import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [title, setTitle] = useState('Початкова назва');

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => setTitle('New title')}>Change titile</button>
    </div>
  );
};
export default App;
