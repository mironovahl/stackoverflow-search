import { takeEvery, put, call, select } from 'redux-saga/effects';
import { getQuestionsBySearchQuery } from 'src/api';
import { TReducer, TSearchResponse } from 'src/types';
import { sort } from 'src/utils';
import { SearchRequestAction, SearchSortingAction } from './actions';
import {
  SEARCH_REQUEST,
  SEARCH_RESULT_LOADED,
  SEARCH_RESULT_SORTING,
  SEARCH_ERROR,
  SEARCH_RESULT_SORTED,
} from './types';

export const fetchSearchResult = async (searchQuery: string) => {
  const data = await getQuestionsBySearchQuery(searchQuery);
  return data;
};

function* sagaSearch(action: SearchRequestAction) {
  try {
    const response: TSearchResponse = yield call(
      fetchSearchResult,
      action.payload,
    );
    const payload = response.items;
    yield put({ type: SEARCH_RESULT_LOADED, payload });
  } catch (e) {
    yield put({ type: SEARCH_ERROR, payload: e });
  }
}

function* sagaSorting(action: SearchSortingAction) {
  try {
    const state: TReducer = yield select();
    const searchResult = Array.from(state.search.searchResult);
    const sortingSearchResult = searchResult.sort(sort(action.payload));
    yield put({ type: SEARCH_RESULT_SORTED, payload: sortingSearchResult });
  } catch (e) {
    yield put({ type: SEARCH_ERROR, payload: e });
  }
}

export function* watchSearch() {
  yield takeEvery<SearchRequestAction>(SEARCH_REQUEST, sagaSearch);
  yield takeEvery<SearchSortingAction>(SEARCH_RESULT_SORTING, sagaSorting);
}
