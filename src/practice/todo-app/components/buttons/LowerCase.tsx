import { useDispatch } from 'react-redux';
import { lowerCaseTodo } from '../../actions';

const LowerCase = (props) => {
  const theme = props.theme;

  const colorTextButtons = theme === 'on' ? '#200526' : 'aquamarine';

  const dispatch = useDispatch();
  const handleLowerCase = () => {
    dispatch(lowerCaseTodo());
  };
  return (
    <button
      style={{
        color: colorTextButtons,
        width: '8em',
      }}
      onClick={handleLowerCase}
    >
      LowerCase
    </button>
  );
};
export default LowerCase;
