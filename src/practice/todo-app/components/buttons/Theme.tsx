import { useDispatch } from 'react-redux';
import { changeTheme } from '../../actions';

const Theme = () => {
  const dispatch = useDispatch(changeTheme());
  return <button>Change Theme</button>;
};
export default Theme;
