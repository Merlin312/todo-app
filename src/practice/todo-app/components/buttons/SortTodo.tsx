import { useDispatch, useSelector } from 'react-redux';
import { sortTodo } from '../../actions';

const SortTodo = () => {
  const theme = useSelector((state) => state.themes);

  const dispathch = useDispatch();
  const handleSortTodo = () => {
    dispathch(sortTodo());
  };

  const colorSortText = theme === 'on' ? '#200526' : 'aquamarine';
  return (
    <button style={{ color: colorSortText }} onClick={handleSortTodo}>
      Sort
    </button>
  );
};
export default SortTodo;
