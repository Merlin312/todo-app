import { combineReducers } from 'redux';
import todos from './todos';
import themes from './themes';

const reducers = {
  themes,
  todos,
};
const rootReducer = combineReducers(reducers);
// const store = createStore(rootReducer)

export default rootReducer;
