import { useDispatch } from 'react-redux';
import { removeAll } from '../../actions';

const RemoveAll = (props) => {
  const theme = props.theme;
  const colorSortText = theme === 'on' ? '#200526' : 'aquamarine';

  const dispatch = useDispatch();
  const handleRemoveAllTodo = () => {
    dispatch(removeAll());
  };
  return (
    <button
      style={{
        color: colorSortText,
        width: '8em',
        marginTop: '4px',
      }}
      onClick={handleRemoveAllTodo}
    >
      RemoveAll
    </button>
  );
};
export default RemoveAll;
