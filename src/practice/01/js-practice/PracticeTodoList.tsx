// import { useState } from 'react';

// const PracticeTodoList = () => {
//   const [todos, setTodos] = useState([]);
//   const [value, setValue] = useState('');

//   const handleAddTodo = () => {
//     const newTodo = {
//       text: value.trim(),
//       completed: false,
//     };
//     setTodos([...todos, newTodo]);
//     setValue('');
//   };
//   // const handleDeleteTodo = (index) => {
//   //   const newTodos = [...todos];
//   //   newTodos.splice(index, 1);
//   //   setTodos(newTodos);
//   // };
//   const handleDeleteTodo = (index) => {
//     setTodos(todos.filter((_, i) => i !== index));
//   };
//   const handleClick = (index) => {
//     const updatedTodo = [...todos];
//     updatedTodo[index].completed = !updatedTodo[index].completed;
//     setTodos(updatedTodo);
//   };
//   return (
//     <div>
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>Todo:</th>
//           <th>Delete</th>
//         </tr>
//       </thead>
//       <tbody>
//         {todos.map((todo, index) => (
//           <tr key={index}>
//             <td>{index + 1}</td>
//             <td>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={todo.completed}
//                   onChange={() => handleClick(index)}
//                 />
//                 {todo.text}
//               </label>
//             </td>
//             <td>
//               <button onClick={() => handleDeleteTodo(index)}>X</button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//       <input
//         type="text"
//         value={value}
//         onChange={(event) => setValue(event.target.value)}
//         placeholder="write your task.."
//       />
//       <button onClick={handleAddTodo}>Add todo</button>
//     </div>
//   );
// };
// export default PracticeTodoList;
