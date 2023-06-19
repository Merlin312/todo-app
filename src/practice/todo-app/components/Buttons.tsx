import { useSelector } from 'react-redux';
import LowerCase from './buttons/LowerCase';
import SortTodo from './buttons/SortTodo';
import ThemeSlider from './buttons/ThemeSlider';
import UpperCase from './buttons/UpperCase';
import RemoveAll from './buttons/RemoveAll';
import AddRandomTodo from './buttons/AddRandomTodo';

const Buttons = () => {
  const theme = useSelector((state) => state.themes);
  const colorText = theme === 'off' ? 'green' : 'red';
  return (
    <div style={{ color: colorText }}>
      <ThemeSlider theme={theme} />
      <SortTodo theme={theme} />
      <UpperCase theme={theme} />
      <LowerCase theme={theme} />
      <RemoveAll theme={theme} />
      <AddRandomTodo />
    </div>
  );
};
export default Buttons;
