import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../actions';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const theme = useSelector((state) => state.themes);
  const dispatch = useDispatch();

  const handleThemeChange = () => {
    const newTheme = theme === 'off' ? 'on' : 'off';
    dispatch(changeTheme(newTheme));
    const body = document.body;
    body.classList.toggle('dark-theme');
  };

  return (
    <button
      className={`theme-toggle-button ${theme}`}
      onClick={handleThemeChange}
    >
      {theme === 'off' ? 'Light Theme' : 'Dark Theme'}
    </button>
  );
};

export default ThemeToggle;
