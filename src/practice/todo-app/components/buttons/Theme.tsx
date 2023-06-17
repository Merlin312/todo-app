import { useDispatch } from 'react-redux';
import { changeTheme } from '../../actions';

const Theme = (props) => {
  const state = props.state.themes;
  console.log(state);
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
