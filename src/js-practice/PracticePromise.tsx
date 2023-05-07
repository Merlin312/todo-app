import { useEffect, useState } from 'react';

const PracticePromise = () => {
  const [array, setArray] = useState([]);
  useEffect(() => {
    const newPromise = new Promise((resolve, reject) => {
      const arr = [4, 3, 64, 23, 88, 102];
      if (arr.length > 0) {
        resolve(arr);
      } else {
        reject('the array is empty');
      }
    });
    newPromise
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
