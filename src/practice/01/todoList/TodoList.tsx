// import React, { useState, useCallback, useEffect } from 'react';
// import './TodoList.css';

// function TodoList() {
//   const [todos, setTodos] = useState(() => {
//     const storedTodos = localStorage.getItem('todos');
//     // return JSON.parse(storedTodos);
//     return storedTodos ? JSON.parse(storedTodos) : [];
//   });
//   const [newTodo, setNewTodo] = useState('');
//   const [error, setError] = useState('');

//   const handleNewTodoChange = useCallback((event) => {
//     setNewTodo(event.target.value);
//   }, []);
//   //  #записує нову інфомацію в стейт todos, якщо нічого не було введено то повертає помилку
//   const handleNewTodoKeyDown = useCallback(
//     (event) => {
//       if (event.key === 'Enter' || event.type === 'click') {
//         event.preventDefault();

//         const trimmedNewTodo = newTodo.trim();

//         if (trimmedNewTodo) {
//           setTodos((prevTodos) => [...prevTodos, trimmedNewTodo]);
//           setNewTodo('');
//           setError('');
//         } else {
//           setError('Будь-ласка введіть ваще завдання..');
//         }
//       }
//     },
//     [newTodo]
//   );

//   const handleDeleteTodo = (indexToDelete: any) => {
//     setTodos((prevTodos) =>
//       prevTodos.filter((_, index) => index != indexToDelete)
//     );
//   };

//   const handleDragStart = useCallback((event, index) => {
//     event.dataTransfer.setData('text/plain', index);
//   }, []);

//   const handleDragOver = useCallback((event) => {
//     event.preventDefault();
//   }, []);

//   const handleDrop = useCallback(
//     (event, index) => {
//       event.preventDefault();

//       const droppedIndex = event.dataTransfer.getData('text/plain');
//       const remainingTodos = todos.filter(
//         (_, index) => index !== Number(droppedIndex)
//       );

//       let newTodos = [...remainingTodos];
//       newTodos.splice(index, 0, todos[droppedIndex]);

//       setTodos(newTodos);
//     },
//     [todos]
//   );

//   const handleCloseError = useCallback(() => {
//     setError('');
//   }, []);

//   // збереження списку справ в localStorage
//   useEffect(() => {
//     localStorage.setItem('todos', JSON.stringify(todos));
//   }, [todos]);

//   setInterval(() => {
//     console.clear();
//   }, 100000);
//   return (
//     <div className="todo-list-container">
//       <div className="new-todo-container">
//         <input
//           className="new-todo-input"
//           type="text"
//           placeholder="Нове завдання"
//           value={newTodo}
//           onChange={handleNewTodoChange}
//           onKeyDown={handleNewTodoKeyDown}
//         />
//         <button className="add-todo-button" onClick={handleNewTodoKeyDown}>
//           Додати
//         </button>
//       </div>
//       <h1 className="todo-list-title">Список справ</h1>
//       {error && (
//         <div className="error-message">
//           {error}
//           <button
//             className="errorBtn delete-button "
//             onClick={handleCloseError}
//           >
//             ✖
//           </button>
//         </div>
//       )}
//       <ul className="todo-list">
//         {todos.map((todo, index) => (
//           <li
//             key={index}
//             className="todo-item"
//             draggable
//             onDragStart={(event) => handleDragStart(event, index)}
//             onDragOver={handleDragOver}
//             onDrop={(event) => handleDrop(event, index)}
//           >
//             {todo}
//             <button
//               className="delete-button"
//               onClick={() => handleDeleteTodo(index)}
//             >
//               ✖
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoList;
