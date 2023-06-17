import { useDispatch } from 'react-redux';
import { lowerCaseTodo } from '../../actions';

const LowerCase = () => {
  const dispatch = useDispatch();
  const handleLowerCase = () => {
    dispatch(lowerCaseTodo());
  };
  return <button onClick={handleLowerCase}>LowerCase</button>;
};
export default LowerCase;
