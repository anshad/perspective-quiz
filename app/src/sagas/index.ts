import { all } from 'redux-saga/effects';
import questionSaga from './question.saga';

export default function* rootSaga() {
  yield all([questionSaga()]);
}
