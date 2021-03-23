import { takeEvery, put, call, takeLatest } from 'redux-saga/effects';
import { getQuestionsBySearchQuery, getAnswers } from 'src/api';
import { ResultRequestAction, QuestionRequestAction } from './actions';
import {
  SEARCH_REQUEST,
  SEARCH_RESULT_LOADED,
  QUESTION_INFO_REQUEST,
  QUESTION_INFO_LOADED,
} from './types';

export const fetchSearchResult = async (searchQuery: string) => {
  const data = await getQuestionsBySearchQuery(searchQuery);
  return data;
};

export const fetchQuestionInfo = async (questionId: string) => {
  const data = await getAnswers(questionId);
  console.log(data);
  return data;
};

function* sagaSearch(action: ResultRequestAction) {
  const payload: { data: any } = yield call(fetchSearchResult, action.payload);
  yield put({ type: SEARCH_RESULT_LOADED, payload });
}

function* sagaGetQuestionInfo(action: QuestionRequestAction) {
  const payload: { data: any } = yield call(fetchQuestionInfo, action.payload);
  yield put({ type: QUESTION_INFO_LOADED, payload });
}

export function* sagaWatcher() {
  yield takeEvery<ResultRequestAction>(SEARCH_REQUEST, sagaSearch);
  yield takeLatest<QuestionRequestAction>(
    QUESTION_INFO_REQUEST,
    sagaGetQuestionInfo,
  );
}
