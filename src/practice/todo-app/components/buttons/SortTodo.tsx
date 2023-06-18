import { useDispatch } from 'react-redux';
import { sortTodo } from '../../actions';

const SortTodo = (props) => {
  const theme = props.theme;

  const dispathch = useDispatch();
  const handleSortTodo = () => {
    dispathch(sortTodo());
  };

  const colorSortText = theme === 'on' ? '#200526' : 'aquamarine';
  return (
    <button
      style={{
        color: colorSortText,
        width: '8em',
      }}
      onClick={handleSortTodo}
    >
      Sort
    </button>
  );
};
export default SortTodo;
