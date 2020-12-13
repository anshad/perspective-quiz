import { combineReducers } from 'redux';
import questionReducer from './question.reducer';

const rootReducer = combineReducers({
  question: questionReducer,
});

export default rootReducer;
