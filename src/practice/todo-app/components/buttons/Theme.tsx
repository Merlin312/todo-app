import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../actions';

const Theme = () => {
  // const state = props.state.themes;
  const state = useSelector((state) => state.themes);
  const dispatch = useDispatch();

  const handleThemeChange = () => {
    dispatch(changeTheme());
  };
  const bgColor = state === 'off' ? 'coral' : 'green';

  return (
    <button style={{ background: bgColor }} onClick={handleThemeChange}>
      {state}
    </button>
  );
};
export default Theme;
