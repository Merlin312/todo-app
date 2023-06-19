const randomReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RANDOM_TODO':
      return {
        ...state,
        randomTodo: action.payload.randomTodo,
      };

    default:
      return state;
  }
};
export default randomReducer;
