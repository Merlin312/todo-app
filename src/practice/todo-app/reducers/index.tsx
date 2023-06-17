import { combineReducers } from 'redux';
import todos from './todos';
import themes from './themes';

const reducers = {
  todos,
  themes,
};
const rootReducer = combineReducers(reducers);
// createStore(rootReducer)

export default rootReducer;
