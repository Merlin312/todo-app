const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      // Додавання нового todo
      const newTodo = {
        id: Date.now(),
        content: action.payload.content,
        completed: false,
      };
      const updatedState = [newTodo, ...state];
      localStorage.setItem('todos', JSON.stringify(updatedState));
      return updatedState;

    case 'REMOVE_TODO':
      // Видалення todo за id
      const updatedTodos = state.filter(
        (todo) => todo.id !== action.payload.id
      );
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return updatedTodos;

    case 'REMOVE_ALL_TODO':
      // Видалення всіх todo
      localStorage.removeItem('todos');
      return [];

    case 'SORT_TODO':
      // Сортування todo за алфавітом
      const sortedTodos = [...state].sort((a, b) =>
        a.content.localeCompare(b.content)
      );
      localStorage.setItem('todos', JSON.stringify(sortedTodos));
      return sortedTodos;

    case 'TOGGLE_TODO':
      // Зміна статусу todo за id
      const toggledTodos = state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      localStorage.setItem('todos', JSON.stringify(toggledTodos));
      return toggledTodos;

    case 'LOWER_CASE_TODO':
      // Перетворення тексту todo в нижній регістр
      const lowerCaseTodos = state.map((todo) => ({
        ...todo,
        content: todo.content.toLowerCase(),
      }));
      localStorage.setItem('todos', JSON.stringify(lowerCaseTodos));
      return lowerCaseTodos;

    case 'UPPER_CASE_TODO':
      // Перетворення тексту todo в верхній регістр
      const upperCaseTodos = state.map((todo) => ({
        ...todo,
        content: todo.content.toUpperCase(),
      }));
      localStorage.setItem('todos', JSON.stringify(upperCaseTodos));
      return upperCaseTodos;

    case 'INIT_TODOS':
      // Ініціалізація todo з localStorage
      const storageTodos = localStorage.getItem('todos');
      if (storageTodos) {
        return JSON.parse(storageTodos);
      }
      return state;

    default:
      return state;
  }
};

export default todos;
