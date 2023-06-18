import { useDispatch, useSelector } from 'react-redux';
import { upperCaseTodo } from '../../actions';

const UpperCase = () => {
  const dispatch = useDispatch();

  const handleUpperCase = () => {
    dispatch(upperCaseTodo());
  };
  const theme = useSelector((state) => state.themes);
  const colorTextButton = theme === 'on' ? '#200526' : 'aquamarine';

  return (
    <button
      style={{
        color: colorTextButton,
        width: '8em',
      }}
      onClick={handleUpperCase}
    >
      UpperCase
    </button>
  );
};

export default UpperCase;
