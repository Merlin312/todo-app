import { useDispatch } from 'react-redux';
import { upperCaseTodo } from '../../actions';

const UpperCase = () => {
  const dispatch = useDispatch();

  const handleUpperCase = () => {
    dispatch(upperCaseTodo());
  };
  return <button onClick={handleUpperCase}>UpperCase</button>;
};
export default UpperCase;
