// import { useState, useEffect } from 'react';
// import './ChangeTheme.css';

// const themeValues = {
//   light: 'light-theme',
//   dark: 'dark-theme',
// };

// const ChangeTheme = () => {
//   const [theme, setTheme] = useState('light');

//   const handleThemeChange = (e) => {
//     const selectedTheme = e.target.value < 50 ? 'light' : 'dark';
//     setTheme(selectedTheme);
//     localStorage.setItem('selectedTheme', selectedTheme);
//   };

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('selectedTheme');
//     if (savedTheme && Object.keys(themeValues).includes(savedTheme)) {
//       setTheme(savedTheme);
//     }
//   }, []);

//   useEffect(() => {
//     const body = document.getElementById('theme');
//     if (body) {
//       body.className = themeValues[theme];
//     }
//   }, [theme]);

//   return (
//     <div>
//       <input
//         type="range"
//         min="0"
//         max="100"
//         value={theme === 'light' ? '0' : '100'}
//         onChange={handleThemeChange}
//       />
//     </div>
//   );
// };

// export default ChangeTheme;
