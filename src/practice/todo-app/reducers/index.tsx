import { combineReducers } from 'redux';
import todos from './todos';
import themes from './themes';
import randomReducer from './randomReducer';

const reducers = {
  randomReducer,
  themes,
  todos,
};
const rootReducer = combineReducers(reducers);
// const store = createStore(rootReducer)

export default rootReducer;
