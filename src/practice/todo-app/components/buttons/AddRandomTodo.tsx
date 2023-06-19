import { useDispatch, useSelector } from 'react-redux';
import { addRandomTodo } from '../../actions';

const AddRandomTodo = (props) => {
  const theme = props.theme;
  const color = theme === 'off' ? 'aquamarine' : '#200526';

  const dispatch = useDispatch();

  const random = useSelector((state) => state.randomReducer.randomTodo);

  const todos = useSelector((state) => state.todos);
  const todos8 = [...todos];

  const handleAddRandomTodo = () => {
    const randomTodo = todos8[Math.floor(Math.random() * todos8.length)];
    dispatch(addRandomTodo(randomTodo));
  };
  return (
    <div>
      {random && random.content && <h1>{random.content}</h1>}
      <button
        style={{
          marginTop: '4px',
          color: color,
          // fontSize: '3em',
          // width: '8em',
        }}
        onClick={handleAddRandomTodo}
      >
        RandomTodo
      </button>
    </div>
  );
};
export default AddRandomTodo;
