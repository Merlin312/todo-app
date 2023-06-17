import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import rootReducer from './practice/todo-app/reducers';

const store = createStore(rootReducer);
// const state = store.getState();
// console.log(state);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App state={store.getState()} />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
// const newState = store.getState();
// console.log(newState);
