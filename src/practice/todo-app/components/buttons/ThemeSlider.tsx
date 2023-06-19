import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../actions';
import './ThemeSlider.css';

const ThemeSlider = () => {
  const theme = useSelector((state) => state.themes);

  const dispatch = useDispatch();

  const handleSliderChange = () => {
    dispatch(changeTheme());
  };

  const body = document.body;
  if (theme === 'on') {
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
  }

  const color = theme === 'on' ? 'azure' : '#333';

  return (
    <div className="theme-slider">
      <span
        style={{
          color: color,
        }}
        className="slider-label"
      >
        {theme === 'off' ? 'Light mode' : 'Dark mode'}
      </span>
      <label className="slider">
        <input
          type="checkbox"
          checked={theme === 'on'}
          onChange={handleSliderChange}
        />
        <span className="slider-round"></span>
      </label>
    </div>
  );
};

export default ThemeSlider;
