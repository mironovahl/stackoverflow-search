import { takeEvery, put, call } from 'redux-saga/effects';
import { getQuestionsBySearchQuery } from 'src/api';
import { SearchRequestAction } from './actions';
import { SEARCH_REQUEST, SEARCH_RESULT_LOADED, SEARCH_ERROR } from './types';

export const fetchSearchResult = async (searchQuery: string) => {
  const data = await getQuestionsBySearchQuery(searchQuery);
  return data;
};

function* sagaSearch(action: SearchRequestAction) {
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

export function* watchSearch() {
  yield takeEvery<SearchRequestAction>(SEARCH_REQUEST, sagaSearch);
}
