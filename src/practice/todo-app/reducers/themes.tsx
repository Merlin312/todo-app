const initialState = localStorage.getItem('theme') || 'off';

const themes = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      const newState = state === 'on' ? 'off' : 'on';
      localStorage.setItem('theme', newState);
      return newState;

    default:
      return state;
  }
};
export default themes;
