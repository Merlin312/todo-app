import LowerCase from './buttons/LowerCase';
import SortTodo from './buttons/SortTodo';
import Theme from './buttons/Theme';
import UpperCase from './buttons/UpperCase';

const Buttons = (props) => {
  const state = props.state.state;
  return (
    <div>
      <SortTodo />
      <UpperCase />
      <LowerCase />
      <Theme state={state} />
    </div>
  );
};
export default Buttons;
