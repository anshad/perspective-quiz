import { call, put, takeLatest } from 'redux-saga/effects';
import {
  UPDATE_RESPONSE_REQUESTING,
  UPDATE_RESPONSE_SUCCESS,
  UPDATE_RESPONSE_ERROR,
  RESULT_REQUESTING,
  RESULT_SUCCESS,
  RESULT_ERROR,
  ANSWER_API,
  RESULT_API,
} from '../constants';
import { request } from '../utils';

function* saveAnswer(action: any) {
  try {
    const response = yield call(request, ANSWER_API, 'POST', action.payload);
    yield put({ type: UPDATE_RESPONSE_SUCCESS, response });
    yield action.history.push(`/result/${response.id}`);
  } catch (error) {
    yield put({ type: UPDATE_RESPONSE_ERROR, error });
  }
}

function* getResult(action: any) {
  try {
    const response = yield call(
      request,
      `${RESULT_API}/${action.payload}`,
      'GET'
    );
    yield put({ type: RESULT_SUCCESS, response });
  } catch (error) {
    yield put({ type: RESULT_ERROR, error });
  }
}

function* answerSaga() {
  yield takeLatest(UPDATE_RESPONSE_REQUESTING, saveAnswer);
  yield takeLatest(RESULT_REQUESTING, getResult);
}

export default answerSaga;
