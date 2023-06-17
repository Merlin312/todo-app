// import { useState, useEffect } from 'react';
// import TodoItemList from './TodoItemList';
// import TodoForm from './TodoForm';
// import ChangeTheme from './ChangeTheme';

// const Todo = () => {
//   const [todos, setTodos] = useState(() => {
//     const storedTodos = localStorage.getItem('todos');
//     return storedTodos ? JSON.parse(storedTodos) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem('todos', JSON.stringify(todos));
//   }, [todos]);

//   const [inputValue, setInputValue] = useState('');

//   useEffect(() => {
//     const interval = setInterval(() => {
//       console.clear();
//     }, 20000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div>
//       {/* <ChangeTheme /> */}
//       <TodoForm
//         setTodos={setTodos}
//         setInputValue={setInputValue}
//         todos={todos}
//         inputValue={inputValue}
//       />
//       <TodoItemList todos={todos} setTodos={setTodos} />
//     </div>
//   );
// };

// export default Todo;
