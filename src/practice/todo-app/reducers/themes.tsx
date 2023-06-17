const initialState = 'off';

const themes = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      console.log(state);
      return state === 'on' ? 'off' : 'on';

    default:
      return state;
  }
};
export default themes;
