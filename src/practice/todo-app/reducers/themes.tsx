// const themes = (state = [], action) => {
//   switch (action.type) {
//     case 'CHANGE_THEME':
//       return [...state];
//     default:
//       return state;
//   }
// };
// export default themes;
const initialState = 'off';

const themes = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      return state === 'on' ? 'off' : 'on';
    default:
      return state;
  }
};
export default themes;
