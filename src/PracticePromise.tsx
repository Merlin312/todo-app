import { useState, useEffect } from 'react';

const PracticePromise = () => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    const myPromise = new Promise((resolve, reject) => {
      const array = [1, 2, 3, 4, 5];
      if (array.length > 0) {
        resolve(array);
      } else {
        reject('Масив порожній');
      }
    });

    myPromise
      .then((result) => {
        setArray(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {array.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
};
export default PracticePromise;
