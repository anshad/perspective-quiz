import { all } from 'redux-saga/effects';
import questionSaga from './question.saga';
import answerSaga from './answer.saga';

export default function* rootSaga() {
  yield all([questionSaga(), answerSaga()]);
}
