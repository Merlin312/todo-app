export const addTodo = (content, index) => ({
  type: 'ADD_TODO',
  payload: {
    content,
    index,
  },
});

export const removeTodo = (id) => ({
  type: 'REMOVE_TODO', // тип дії - видалення елемента todo
  payload: {
    id, // ідентифікатор елемента todo, який потрібно видалити
  },
});
export const sortTodo = () => ({
  type: 'SORT_TODO',
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO', // тип дії - перемикання стану елемента todo
  payload: {
    id, // ідентифікатор елемента todo, стан якого потрібно змінити
  },
});
export const upperCaseTodo = () => ({
  type: 'UPPER_CASE_TODO',
});
export const lowerCaseTodo = () => ({
  type: 'LOWER_CASE_TODO',
});

export const changeTheme = () => ({
  type: 'CHANGE_THEME',
});
export const removeAll = () => ({
  type: 'REMOVE_ALL_TODO',
});
export const initTodos = () => ({
  type: 'INIT_TODOS',
});
