
// У цьому прикладі я покажу вам, як створити простий додаток "todo", використовуючи React та Redux. Для розуміння коду важливо мати базове знання щодо синтаксису Javascript (ES6), React та Redux.

// Спочатку створимо новий проект React, використовуючи create-react-app:

// npx create-react-app todo-app
// cd todo-app
// Тепер встановимо Redux та React-Redux:

// npm install redux react-redux
// Створимо нові файли та папки, необхідні для нашого проекту:

// src/
// |-- actions/
// |   |-- index.js
// |-- reducers/
// |   |-- todos.js
// |   |-- index.js
// |-- components/
// |   |-- AddTodo.js
// |   |-- TodoList.js
// |   |-- Todo.js
// |-- App.js
// |-- index.js
// Ми поділили додаток на декілька компонентів та використовуємо Redux для управління станом. Давайте заповнимо файли наступним кодом.

// src/actions/index.js:

// Опрацьовує додавання задачі
export const addTodo = (content) => ({
  type: 'ADD_TODO',
  payload: {
    content,
  },
});

// Опрацьовує зміну статусу задачі
export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  payload: {
    id,
  },
});
// src/reducers/todos.js:

// Визначає, як змінюється стан задач
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), content: action.payload.content, completed: false }];
    case 'TOGGLE_TODO':
      return state.map((todo) => (todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo));
    default:
      return state;
  }
};

export default todos
// src/reducers/index.js:

import { combineReducers } from 'redux';
import todos from './todos';

// Комбінуємо редуктори
const rootReducer = combineReducers({
  todos,
});

export default rootReducer;
// src/components/AddTodo.js:

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return; // Перевіряємо, чи введений текст не порожній
    dispatch(addTodo(input));
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Додати задачу</button>
    </form>
  );
};

export default AddTodo;
// src/components/Todo.js:

import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../actions';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <
      onClick={() => dispatch(toggleTodo(todo.id))}
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
      }}
    >
      {todo.content}
    </li>
  );
};

export default Todo;
// src/components/TodoList.js:

import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;


// src/App.js:

import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div>
      <1>Список задач</h1>
      <Todo />
      <TodoList />
    </div>
  );
};

export default App;
// нарешті, src/index.js:

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './App';
import './index.css';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// Тепер у вас є простий додаток "todo" з React та Redux. Він складається з компонентів App, AddTodo, TodoList, та Todo. У додатку використовується Redux для управління станом, а також дві Redux actions (addTodo та toggleTodo) та один reducer (todos). Завдяки провайдеру (Provider), Redux стор доступний для всіх компонентів.

// Не забудьте запустити додаток, виконавши команду npm start у терміналі. Він відкриється у вашому браузері, і ви зможете перевірити його роботу.


// це вся інформація? якщо можливо, то дадай коментарі в код
// Звичайно, додам коментарі вам до коду, щоб пояснити, що робить кожна частина.

// src/actions/index.js:

// Опрацьовує додавання задачі
export const addTodo = (content) => ({
  type: 'ADD_TODO',
  payload: {
    content,
  },
});

// Опрацьовує зміну статусу задачі
export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  payload: {
    id,
  },
});
// src/reducers/todos.js:

// Визначає, як змінюється стан задач
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      // Додає нову задачу в кінець масиву
      return [
        ...state,
        { id: Date.now(), content: action.payload.content, completed: false },
      ];
    case 'TOGGLE_TODO':
      // Змінює статус виконання задачі для задачі з заданим ідентифікатором
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      // Повертає поточний стан, якщо дія не визначена
      return state;
  }
};

export default todos;
// src/reducers/index.js:

import { combineReducers } from 'redux';
import todos from './todos';

// Комбінуємо редуктори
const rootReducer = combineReducers({
  todos,
});

export default rootReducer;
// src/components/AddTodo.js:

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = () => {
  const [input, setInput] = useState(''); // Стан для значення текстового поля
  const dispatch = useDispatch(); // Вбудована функція redux для запуску дій

  const handleSubmit = (e) => {
    e.preventDefault(); // Запобігаємо стандартному поведінці форми
    if (!input.trim()) return; // Перевіряємо, чи введений текст не порожній
    dispatch(addTodo(input)); // Запускаємо дію "додати задачу"
    setInput(''); // Очищаємо текстове поле
  };

  return (
    <form onSubmit={handleSubmit}>
      <
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)} // Змінюємо стан вводу тексту
      />
      < type="submit">Додати задачу</button>
    </form>
  );
};

export default AddTodo;
// src/components/Todo.js:

import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../actions';

const Todo = ({ todo }) => {
  const dispatch = useDispatch(); // Вбудована функція redux для запуску дій

  return (
    <li
      onClick={() => dispatch(toggleTodo(todo.id))} // Змінюємо статус завершення задачі
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none', // Стиль для відображення завершених задач
      }}
    >
      {todo.content}
    </li>
  );
};

export default Todo;
src/components/TodoList.js:

import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';

const TodoList = () => {
  const todos = useSelector((state) => state.todos); // Отримуємо список задач з Redux State

  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} /> // Рендеримо кожну задачу

      ))}
    </ul>
  );
};

export default TodoList;
// src/App.js:

import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

// Головний компонент додатку
const App = () => {
  return (
    <>
      <1>Список задач</h1>
      <AddTodo /> // Компонент для додавання нових задач
      <TodoList /> // Компонент, що відображає список задач
    </div>
  );
};

export default App;
// src/index.js:

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './App';
import './index.css';

// Створюємо Redux Store
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Запускаємо головний компонент додатку в середині Redux Provider
render(
  <Provider store={store}>
    < />
  </Provider>,
  document.getElementById('root')
);
// Тепер у вас є коментарі для різних частин коду. Це допоможе вам зрозуміти, що робить кожна частина коду та як вони взаємодіють одна з одною в додатку на основі React та Redux.




E