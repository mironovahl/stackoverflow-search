import { put, call, takeLatest } from 'redux-saga/effects';

import { getQuestionInfo } from 'src/api';
import { TQuestionInfoResponse } from 'src/types';
import { convertToCamelCase } from 'src/utils';

import { QuestionRequestAction } from './actions';
import {
  QUESTION_INFO_REQUEST,
  QUESTION_INFO_LOADED,
  QUESTION_ERROR,
} from './types';

export const fetchQuestionInfo = async (questionId: string) => {
  const data = await getQuestionInfo(questionId);
  return data;
};

function* sagaGetQuestionInfo(action: QuestionRequestAction) {
  try {
    const response: TQuestionInfoResponse = yield call(
      fetchQuestionInfo,
      action.payload,
    );

    const questionInfo = convertToCamelCase(response.items[0]);

    yield put({ type: QUESTION_INFO_LOADED, payload: questionInfo });
  } catch (e) {
    yield put({ type: QUESTION_ERROR, payload: e });
  }
}

export function* watchQuestion() {
  yield takeLatest<QuestionRequestAction>(
    QUESTION_INFO_REQUEST,
    sagaGetQuestionInfo,
  );
}
