const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        { id: Date.now(), content: action.payload.content, completed: false },
      ];
    case 'REMOVE_TODO':
      return [...state].filter((todo) => todo.id !== action.payload.id);
    case 'SORT_TODO':
      return [...state].sort((a, b) => b.content.localeCompare(a.content));
    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case 'LOWER_CASE_TODO':
      return state.map((todo) => ({
        ...todo,
        content: todo.content.toLowerCase(),
      }));

    case 'UPPER_CASE_TODO':
      return state.map((todo) => ({
        ...todo,
        content: todo.content.toUpperCase(),
      }));

    default:
      return state;
  }
};

export default todos;
