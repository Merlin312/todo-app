import { useEffect, useState } from 'react';

const PracticeUseEffect = (props) => {
  const [title, setTitle] = useState('Початкова назва...');

  useEffect(() => {
    document.title = title;
    console.log('title chages');
  }, [title]);

  return (
    <div>
      <h1>{title}</h1>
      <p>{props.newTitle}</p>
      <button onClick={() => setTitle('New title..')}>Change titile</button>
    </div>
  );
};
export default PracticeUseEffect;
