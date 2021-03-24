import { takeEvery, put, call, takeLatest } from 'redux-saga/effects';
import {
  getQuestionsBySearchQuery,
  getAnswers,
  getQuestionsByTag,
  getQuestionsByUser,
} from 'src/api';
import { TSearchBy } from 'src/types';
import {
  ResultRequestAction,
  QuestionRequestAction,
  ViewPanelDataRequestAction,
} from './actions';
import {
  SEARCH_REQUEST,
  SEARCH_RESULT_LOADED,
  QUESTION_INFO_REQUEST,
  QUESTION_INFO_LOADED,
  SEARCH_ERROR,
  QUICK_VIEW_PANEL_DATA_LOADED,
  QUICK_VIEW_PANEL_DATA_REQUEST,
} from './types';

export const fetchSearchResult = async (searchQuery: string) => {
  const data = await getQuestionsBySearchQuery(searchQuery);
  return data;
};

export const fetchQuestionInfo = async (questionId: string) => {
  const data = await getAnswers(questionId);
  return data;
};

export const fetchViewPanelData = async (
  searchByType: TSearchBy,
  searchByValue: string,
) => {
  let data;
  if (searchByType === 'tag') {
    data = await getQuestionsByTag(searchByValue);
  }

  if (searchByType === 'tag') {
    data = await getQuestionsByUser(searchByValue);
  }

  return data;
};

function* sagaSearch(action: ResultRequestAction) {
  try {
    const payload: { data: any } = yield call(
      fetchSearchResult,
      action.payload,
    );
    yield put({ type: SEARCH_RESULT_LOADED, payload });
  } catch (e) {
    yield put({ type: SEARCH_ERROR, e });
  }
}

function* sagaGetQuestionInfo(action: QuestionRequestAction) {
  const payload: { data: any } = yield call(fetchQuestionInfo, action.payload);
  yield put({ type: QUESTION_INFO_LOADED, payload });
}

function* sagaGetViewPanelData(action: ViewPanelDataRequestAction) {
  const payload: { data: any } = yield call(
    fetchViewPanelData,
    action.payload.searchByType,
    action.payload.searchByValue,
  );
  yield put({ type: QUICK_VIEW_PANEL_DATA_LOADED, payload });
}

export function* sagaWatcher() {
  yield takeEvery<ResultRequestAction>(SEARCH_REQUEST, sagaSearch);

  yield takeLatest<QuestionRequestAction>(
    QUESTION_INFO_REQUEST,
    sagaGetQuestionInfo,
  );

  yield takeLatest<ViewPanelDataRequestAction>(
    QUICK_VIEW_PANEL_DATA_REQUEST,
    sagaGetViewPanelData,
  );
}
