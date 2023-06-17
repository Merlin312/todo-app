// import { useState } from 'react';

// const PracticeCalculator = () => {
//   const [num1, setNum1] = useState(0);
//   const [num2, setNum2] = useState(0);
//   const [operator, setOperator] = useState('+');
//   const [result, setResult] = useState(0);

//   const handleChangeNum1 = (event) => {
//     setNum1(Number(event.target.value));
//   };
//   const handleChangeNum2 = (event) => {
//     setNum2(Number(event.target.value));
//   };
//   const handleChangeOperator = (event) => {
//     setOperator(event.target.value);
//   };
//   const handleCalculate = () => {
//     switch (operator) {
//       case '+':
//         setResult(num1 + num2);
//         break;
//       case '-':
//         setResult(num1 - num2);
//         break;
//       case '*':
//         setResult(num1 * num2);
//         break;
//       case '/':
//         setResult(num1 / num2);
//         break;
//       default:
//         setResult(0);
//     }
//   };

//   return (
//     <div>
//       <label>
//         Введіть перше число:
//         <input type="number" value={num1} onChange={handleChangeNum1} />
//       </label>
//       <label>
//         Введіть друге число:
//         <input type="number" value={num2} onChange={handleChangeNum2} />
//       </label>
//       <label>
//         <select value={operator} onChange={handleChangeOperator}>
//           <option value="+">Додавання</option>
//           <option value="-">Віднімання</option>
//           <option value="*">Множення</option>
//           <option value="/">Ділення</option>
//         </select>
//       </label>
//       <button onClick={handleCalculate}>Розрахувати</button>
//       <p>Результат: {result}</p>
//     </div>
//   );
// };
// export default PracticeCalculator;
