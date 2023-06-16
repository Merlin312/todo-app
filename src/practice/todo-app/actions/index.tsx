export const addTodo = (content) => ({
  type: 'ADD_TODO', // тип дії - додавання елемента todo
  payload: {
    content, // вміст елемента todo
  },
});

export const removeTodo = (id) => ({
  type: 'REMOVE_TODO', // тип дії - видалення елемента todo
  payload: {
    id, // ідентифікатор елемента todo, який потрібно видалити
  },
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO', // тип дії - перемикання стану елемента todo
  payload: {
    id, // ідентифікатор елемента todo, стан якого потрібно змінити
  },
});