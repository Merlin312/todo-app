import { useState } from 'react';

const colorNames = [
  'Aquamarine',
  'BlueViolet',
  'Chartreuse',
  'CornflowerBlue',
  'Thistle',
  'SpringGreen',
  'SaddleBrown',
  'PapayaWhip',
  'MistyRose',
];

const ChangeBackground = () => {
  const [color, setColor] = useState('red');
  const divStyle = {
    backgroundColor: color,
    width: '1000px',
    height: '700px',
    fontSize: '25px',
  };
  return (
    <div style={divStyle}>
      <h1>Select color: {color}</h1>
      {colorNames.map((el) => (
        <button key={el} onClick={() => setColor(el)}>
          {el}
        </button>
      ))}
    </div>
  );
};
export default ChangeBackground;
