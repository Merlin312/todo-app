import { useState, useEffect } from 'react';

const PracticePromise = () => {
  const [array, setArray] = useState([]);

  // useEffect,resolve, reject, then, catch

  useEffect(() => {
    const myPromise = new Promise((resolve, reject) => {
      const array = [4, 5, 2, 886, 3, 1, 8];
      if (array.length > 0) {
        resolve(array);
      } else {
        reject('маси порожній');
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

  setInterval(() => {
    console.clear();
  }, 30000);
  return (
    <div>
      {array.map((item, index) => (
        <p key={index}>{item * 10}</p>
      ))}
    </div>
  );
};
export default PracticePromise;
