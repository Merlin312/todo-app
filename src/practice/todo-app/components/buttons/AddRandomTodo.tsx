import { useDispatch, useSelector } from 'react-redux';
import { addRandomTodo } from '../../actions';

const AddRandomTodo = () => {
  const dispatch = useDispatch();

  const random = useSelector((state) => state.randomReducer.randomTodo);

  const todos = useSelector((state) => state.todos);
  const randomTodo = todos[Math.floor(Math.random() * todos.length)];

  const handleAddRandomTodo = () => {
    dispatch(addRandomTodo(randomTodo));
  };
  return (
    <div>
      {random && random.content && <h1>{random.content}</h1>}
      <button onClick={handleAddRandomTodo}>RandomTodo</button>
    </div>
  );
};
export default AddRandomTodo;
