import { useEffect, useState } from 'react';

const PracticeClass = () => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    const prom = new Promise((resolve, reject) => {
      const arr = [3, 5, 6, 2];
      if (arr.length > 0) {
        setTimeout(() => {
          resolve(arr);
        }, 3000);
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
  }, []);

  return (
    <div>
      {/* <h1>Helllooo</h1> */}
      {array.map((ar, index) => (
        <li key={index}>{ar}</li>
      ))}
    </div>
  );
};
export default PracticeClass;
