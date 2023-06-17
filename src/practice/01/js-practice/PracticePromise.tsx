// import { useEffect, useState } from 'react';

//   const [array, setArray] = useState([]);
//   useEffect(() => {
//     const myPromise = new Promise((resolve, reject) => {
//       const arr = [3, 5, 2, 2, 5, 52, 24, 1];
//       if (arr.length > 0) {
//         resolve(arr);
//       } else {
//         reject('the array is empty');
//       }
//     });
//     myPromise
//       .then((result) => {
//         setArray(result);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   const prom = new Promise((resolve, reject) => {
//     const num = Math.random();
//     if (num < 0.5) {
//       resolve('Yay!');
//     } else {
//       reject('Ohhh noooo!');
//     }
//   });
//   const handleSuccess = (resolvedValue) => {
//     console.log(resolvedValue);
//   };
//   const handleFailure = (rejectionResson) => {
//     console.log(rejectionResson);
//   };
//   prom.then(handleSuccess, handleFailure);

//   setInterval(() => {
//     console.clear();
//   }, 30000);
//   return (
//     <div>
//       {array.map((item, index) => (
//         <li key={index}>{item}</li>
//       ))}
//     </div>
//   );
// };
// export default PracticePromise;
