import { useState } from 'react';

const PracticeClass = () => {
  const [array, setArray] = useState([]);
  const prom = new Promise((resolve, reject) => {
    const arr = [3, 5, 6, 2];
    if (arr.length > 0) {
      resolve(arr);
    } else {
      reject('Масив пустий');
    }
  });
  prom
    .then((result) => {
      setArray(result);
    })
    .catch((error) => {
      console.error(error);
    });
  return (
    <div>
      {/* <h1>Helllooo</h1> */}
      {array.map((ar, index) => (
        <li>{ar}</li>
      ))}
    </div>
  );
};
export default PracticeClass;
