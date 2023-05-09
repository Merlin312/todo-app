import { useState } from 'react';

const PracticeForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const handleSubmite = (e) => {
    e.preventDefault();
    console.log(`Submited name: ${name}, email: ${email}`);
  };
  setInterval(() => {
    console.clear();
  }, 25000);
  return (
    <div>
      <form onSubmit={handleSubmite}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default PracticeForm;
