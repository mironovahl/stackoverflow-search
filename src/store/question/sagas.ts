import { put, call, takeLatest } from 'redux-saga/effects';
import { getAnswers } from 'src/api';
import { QuestionRequestAction } from './actions';
import { QUESTION_INFO_REQUEST, QUESTION_INFO_LOADED } from './types';

export const fetchQuestionInfo = async (questionId: string) => {
  const data = await getAnswers(questionId);
  return data;
};

function* sagaGetQuestionInfo(action: QuestionRequestAction) {
  const payload: { data: any } = yield call(fetchQuestionInfo, action.payload);
  yield put({ type: QUESTION_INFO_LOADED, payload });
}

export function* watchQuestion() {
  yield takeLatest<QuestionRequestAction>(
    QUESTION_INFO_REQUEST,
    sagaGetQuestionInfo,
  );
}
