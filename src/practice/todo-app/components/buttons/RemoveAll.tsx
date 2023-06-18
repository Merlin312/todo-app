const RemoveAll = (props) => {
  const theme = props.theme;
  console.log(theme);
  const colorSortText = theme === 'on' ? '#200526' : 'aquamarine';
  return (
    <button
      style={{
        color: colorSortText,
        width: '8em',
        marginTop: '4px',
      }}
    >
      RemoveAll
    </button>
  );
};
export default RemoveAll;
