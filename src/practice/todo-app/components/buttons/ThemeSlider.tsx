import { useDispatch } from 'react-redux';
import { changeTheme } from '../../actions';
import './ThemeSlider.css';

const ThemeSlider = (props) => {
  const theme = props.theme;

  const dispatch = useDispatch();

  const handleSliderChange = (event) => {
    dispatch(changeTheme());
    const body = document.body;
    body.classList.toggle('dark-theme');
  };
  const color = theme === 'on' ? 'azure' : '#333';
  return (
    <div className="theme-slider">
      <span
        style={{
          color: color,
          // scale: 3.1,
        }}
        className="slider-label"
      >
        {theme === 'off' ? 'Light mode' : 'Dark mode'}
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
