import { useEffect, useState } from 'react';

const PracticePromise = () => {
  const [array, setArray] = useState([]);
  useEffect(() => {
    const myPromise = new Promise((resolve, reject) => {
      const arr = [3, 5, 2, 2, 5, 52, 24, 1];
      if (arr.length > 0) {
        resolve(arr);
      } else {
        reject('the array is empty');
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
      {array.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
};
export default PracticePromise;
