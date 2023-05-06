import { useEffect, useState } from 'react';

const PracticeUseEffect = (props) => {
  const [title, setTitle] = useState('Початкова назва');

  useEffect(() => {
    document.title = title;
    console.log('title chages');
  }, [title]);

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => setTitle(props.newTitle)}>Change titile</button>
    </div>
  );
};
export default PracticeUseEffect;
