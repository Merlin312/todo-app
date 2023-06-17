import { useDispatch } from 'react-redux';
import { sortTodo } from '../../actions';

const SortTodo = () => {
  const dispathch = useDispatch();
  const handleSortTodo = () => {
    dispathch(sortTodo());
  };
  return (
    <button
      // style={{ color: 'green' }}
      onClick={handleSortTodo}
    >
      Sort
    </button>
  );
};
export default SortTodo;
