import { useSelector } from 'react-redux';
import LowerCase from './buttons/LowerCase';
import SortTodo from './buttons/SortTodo';
import ThemeSlider from './buttons/ThemeSlider';
import UpperCase from './buttons/UpperCase';
import RemoveAll from './buttons/RemoveAll';

const Buttons = () => {
  const theme = useSelector((state) => state.themes);
  const colorText = theme === 'off' ? 'green' : 'red';
  return (
    <div style={{ color: colorText }}>
      <ThemeSlider />
      <SortTodo />
      <UpperCase />
      <LowerCase />
      <RemoveAll theme={theme} />
    </div>
  );
};
export default Buttons;
