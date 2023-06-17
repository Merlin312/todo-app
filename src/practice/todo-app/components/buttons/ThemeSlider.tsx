import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../actions';
import './ThemeSlider.css';

const ThemeSlider = () => {
  const theme = useSelector((state) => state.themes);
  const dispatch = useDispatch();

  const handleSliderChange = (event) => {
    // const newTheme = event.target.checked ? 'on' : 'off';
    dispatch(changeTheme());
    const body = document.body;
    body.classList.toggle('dark-theme');
  };
  const color = theme === 'off' ? 'azure' : '#333';
  return (
    <div className="theme-slider">
      <span style={{ color }} className="slider-label">
        {theme === 'on' ? 'Light mode' : 'Dark mode'}
      </span>
      <label className="slider">
        <input
          type="checkbox"
          // checked={theme === 'on'}
          onChange={handleSliderChange}
        />
        <span className="slider-round"></span>
      </label>
    </div>
  );
};

export default ThemeSlider;
