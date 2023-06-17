import LowerCase from './buttons/LowerCase';
import SortTodo from './buttons/SortTodo';
import Theme from './buttons/Theme';
import UpperCase from './buttons/UpperCase';

const Buttons = () => {
  return (
    <div>
      <SortTodo />
      <UpperCase />
      <LowerCase />
      <Theme />
    </div>
  );
};
export default Buttons;
