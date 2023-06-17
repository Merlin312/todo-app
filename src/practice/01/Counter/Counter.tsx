// import { useState, useEffect } from 'react';
// import './Counter.css';

// function Counter() {
//   const [count, setCount] = useState(() => {
//     const storedCount = localStorage.getItem('count');
//     return storedCount ? parseInt(storedCount) : 86400;
//   });
//   const [showDelete, setShowDelete] = useState(false);
//   const [newCount, setNewCount] = useState('');

//   useEffect(() => {
//     localStorage.setItem('count', count.toString());
//   }, [count]);

//   const increment = () => {
//     setCount((count) => count + 1);
//     setShowDelete(true);
//   };

//   const decrement = () => {
//     setCount((count) => count - 1);
//     setShowDelete(true);
//   };

//   const deleteCount = () => {
//     setCount(0);
//     setShowDelete(false);
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === 'Enter') {
//       increment();
//     }
//   };

//   const handleNewCountChange = (e) => {
//     setNewCount(e.target.value);
//   };

//   const handleNewCountSubmit = () => {
//     setCount(parseInt(newCount));
//     setNewCount('');
//     setShowDelete(true);
//   };

//   setInterval(() => {
//     console.clear();
//   }, 90000);

//   return (
//     <div className="App">
//       <div className="card">
//         <h1 className="title">{count}</h1>
//         <button className="btn" onClick={decrement}>
//           Відняти -1
//         </button>
//         <button className="btn" onKeyDown={handleKeyDown} onClick={increment}>
//           Додати +1
//         </button>
//         {showDelete && (
//           <button className="btn danger" onClick={deleteCount}>
//             ✖
//           </button>
//         )}
//         <div className="input-container">
//           <input
//             type="number"
//             className="inp btn"
//             value={newCount}
//             onChange={handleNewCountChange}
//             placeholder="Новий лічильник"
//           />
//           <button className="btn" onClick={handleNewCountSubmit}>
//             Змінити
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Counter;
