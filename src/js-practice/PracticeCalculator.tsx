import { useState } from 'react';

const PracticeCalculator = () => {
  const [numFirst, setNumFirtst] = useState(0);
  const [numSecond, setNumSecond] = useState(0);
  const [oprerator, setOprerator] = useState('+');
  const [result, setResult] = useState(0);

  const handleChangeNuFirst = (event) => {
    setNumFirtst(Number(event.target.value));
  };
  const handleChangeNuSecond = (event) => {
    setNumSecond(Number(event.target.value));
  };

  const handleChangeOperator = (event) => {
    setOprerator(event.target.value);
  };
  const handleCalculate = () => {
    switch (oprerator) {
      case '+':
        setResult(numFirst + numSecond);
        break;
      case '*':
        setResult(numFirst * numSecond);
        break;
      case '-':
        setResult(numFirst - numSecond);
        break;
      case '/':
        setResult(numFirst / numSecond);
        break;
      default:
        setResult(0);
    }
  };
  return (
    <div>
      <label>
        Введіть перше число:
        <input type="number" value={numFirst} onChange={handleChangeNuFirst} />
      </label>
      <label>
        Введіть друге число:
        <input
          type="number"
          value={numSecond}
          onChange={handleChangeNuSecond}
        />
      </label>
      <label>
        <select value={oprerator} onChange={handleChangeOperator}>
          <option value="+">Додавання</option>
          <option value="-">Віднімання</option>
          <option value="*">Множення</option>
          <option value="/">Ділення</option>
        </select>
      </label>
      <button onClick={handleCalculate}>Розрахувати</button>
      <p>Результат: {result}</p>
    </div>
  );
};
export default PracticeCalculator;
