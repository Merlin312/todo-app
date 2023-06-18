import { useDispatch } from 'react-redux';
import { upperCaseTodo } from '../../actions';

const UpperCase = (props) => {
  const theme = props.theme;
  const dispatch = useDispatch();

  const handleUpperCase = () => {
    dispatch(upperCaseTodo());
  };
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
