import { useEffect, useState } from 'react';
import './App.css';
import PracticeUseEffect from './js-practice/practiceUseEffect';

const App = () => {
  const newTitle = 'I love this...';
  return (
    <div>
      <PracticeUseEffect newTitle={newTitle} />
    </div>
  );
};
export default App;
