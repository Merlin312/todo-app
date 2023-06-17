import LowerCase from './buttons/LowerCase';
import SortTodo from './buttons/SortTodo';
import ThemeSlider from './buttons/ThemeSlider';
import ThemeToggle from './buttons/ThemeToggle';
import UpperCase from './buttons/UpperCase';

const Buttons = () => {
  return (
    <div>
      <ThemeSlider />
      <SortTodo />
      <UpperCase />
      <LowerCase />
      {/* <ThemeToggle /> */}
    </div>
  );
};
export default Buttons;
