import { useDispatch, useSelector } from 'react-redux';
import { lowerCaseTodo } from '../../actions';

const LowerCase = () => {
  const theme = useSelector((state) => state.themes);
  const colorTextButtons = theme === 'on' ? '#200526' : 'aquamarine';

  const dispatch = useDispatch();
  const handleLowerCase = () => {
    dispatch(lowerCaseTodo());
  };
  return (
    <button style={{ color: colorTextButtons }} onClick={handleLowerCase}>
      LowerCase
    </button>
  );
};
export default LowerCase;
