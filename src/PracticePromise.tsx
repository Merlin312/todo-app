import { useEffect } from 'react';
import { useState } from 'react';

const PracticePromise = () => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    const practicePromise = new Promise((resolve, reject) => {
      const array = [44, 5, 2, 5, 64];
      if (array.length > 0) {
        resolve(array);
      } else {
        reject('Масив пустий');
      }
    });
    practicePromise
      .then((result) => {
        setArray(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {array.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
};
export default PracticePromise;
