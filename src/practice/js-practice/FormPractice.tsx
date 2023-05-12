import { useState } from 'react';

const FormPractice = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim() || !surname.trim() || isNaN(age) || age < 1 || age > 120) {
      console.log('Помилка валідації');
      return;
    }
    console.log(`Ім'я: ${name}, Прізвище: ${surname}, Вік: ${age}`);
    setName('');
    setSurname('');
    setAge(0);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Введіть ваше імʼя:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="введіть імʼя.."
          />
        </label>
        <br />
        <label>
          Введіть вашу фамілію:
          <input
            type="text"
            value={surname}
            onChange={(event) => setSurname(event.target.value)}
            placeholder="введіть фамілію.."
          />
        </label>
        <br />
        <label>
          Введіть ваш вік:
          <input
            type="number"
            value={age}
            onChange={(event) => setAge(event.target.value)}
            placeholder="введіть вік.."
          />
        </label>
        <br />

        <button type="submit">Відправити</button>
      </form>
    </div>
  );
};
export default FormPractice;
