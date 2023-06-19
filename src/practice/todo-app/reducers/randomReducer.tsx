const initialState = {
  randomTodo: null,
  showModal: false,
};

const randomReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_RANDOM_TODO':
      return {
        ...state,
        randomTodo: action.payload.randomTodo,
        showModal: true,
      };

    case 'HIDE_RANDOM_MODAL':
      return {
        ...state,
        showModal: false,
      };

    default:
      return state;
  }
};

export default randomReducer;
