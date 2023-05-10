import React, { useState } from 'react';

function ChangeContactList({ contacts, onAddContact }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleAddContact = () => {
    const newContact = {
      name,
      phone,
    };
    setName('');
    setPhone('');

    onAddContact(newContact);
  };

  return (
    <div>
      <h2>Список контактів</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.name} - {contact.phone}
          </li>
        ))}
      </ul>
      <h2>Додати контакт</h2>
      <form>
        <label>
          Ім'я:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Телефон:
          <input type="text" value={phone} onChange={handlePhoneChange} />
        </label>
        <button type="button" onClick={handleAddContact}>
          Додати
        </button>
      </form>
    </div>
  );
}

export default ChangeContactList;
