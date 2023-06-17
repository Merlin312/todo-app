import { combineReducers } from 'redux';
import todos from './todos';

const reducers = {
  todos,
};
const rootReducer = combineReducers({
  todos,
});
// createStore(rootReducer)

export default rootReducer;
