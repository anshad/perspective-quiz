import { combineReducers } from 'redux';
import questionReducer from './question.reducer';
import resultReducer from './result.reducer';

const rootReducer = combineReducers({
  question: questionReducer,
  result: resultReducer,
});

export default rootReducer;
