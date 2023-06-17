// import { useState } from 'react';

// const ChangeContactList = ({ contacts, onAddContact }) => {
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');

//   const handleAddContact = () => {
//     const newContact = {
//       name,
//       phone,
//     };
//     setName('');
//     setPhone('');
//     onAddContact(newContacts);
//   };
//   return (
//     <div>
//       <h2>Список контактів</h2>
//       <ul>
//         {contacts.map((contact, index) => (
//           <li key={index}>
//             {contact.name} - {contact.phone}
//           </li>
//         ))}
//       </ul>
//       <h2>Додати контакти</h2>
//       <form>
//         <label>
//           Імʼя:
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </label>
//         <label>
//           Телефот:
//           <input
//             type="text"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />
//         </label>
//         <button type="button" onClick={handleAddContact}>
//           Add
//         </button>
//       </form>
//     </div>
//   );
// };
// export default ChangeContactList;
