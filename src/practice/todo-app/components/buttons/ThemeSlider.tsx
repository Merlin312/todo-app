import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../actions';

const ThemeSlider = () => {
  const theme = useSelector((state) => state.themes);
  const dispatch = useDispatch();

  const handleSliderChange = (event) => {
    const newTheme = event.target.checked ? 'on' : 'off';
    dispatch(changeTheme(newTheme));
    const body = document.body;
    body.classList.toggle('dark-theme');
  };

  return (
    <div className="theme-slider">
      <span className="slider-label">Toggle Theme:</span>
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
