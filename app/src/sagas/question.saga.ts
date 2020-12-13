import { call, put, takeLatest } from 'redux-saga/effects';
import {
  QUESTION_REQUESTING,
  QUESTION_SUCCESS,
  QUESTION_ERROR,
  QUESTIONS_API,
} from '../constants';
import { request } from '../utils';

function* getQuestions(action: any) {
  try {
    const response = yield call(request, QUESTIONS_API, 'GET');
    yield put({ type: QUESTION_SUCCESS, response });
  } catch (error) {
    yield put({ type: QUESTION_ERROR, error });
  }
}

function* questionSaga() {
  yield takeLatest(QUESTION_REQUESTING, getQuestions);
}

export default questionSaga;
