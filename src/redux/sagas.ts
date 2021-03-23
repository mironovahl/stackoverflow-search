import { takeEvery, put, call } from 'redux-saga/effects';
import { getQuestionsBySearchQuery } from 'src/api';
import { useQuery } from 'src/utils';
import { SEARCH_REQUEST, SEARCH_RESULT_LOADED } from './types';

type SearchAction = { type: typeof SEARCH_REQUEST; payload: string };

export const fetchSearchResult = async (searchQuery: string) => {
  const data = await getQuestionsBySearchQuery(searchQuery);
  return data;
};

function* sagaSearch(action: SearchAction) {
  const payload: { data: any } = yield call(fetchSearchResult, action.payload);
  yield put({ type: SEARCH_RESULT_LOADED, payload });
}
export function* sagaWatcher() {
  yield takeEvery<SearchAction>(SEARCH_REQUEST, sagaSearch);
}
