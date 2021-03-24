import { takeEvery, put, call, getContext, select } from 'redux-saga/effects';
import { getQuestionsBySearchQuery } from 'src/api';
import { TReducer, TSortBy } from 'src/types';
import { sort } from 'src/utils';
import { SearchRequestAction, SearchSortingAction } from './actions';
import {
  SEARCH_REQUEST,
  SEARCH_RESULT_LOADED,
  SEARCH_RESULT_SORTING,
  SEARCH_ERROR,
} from './types';

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

function* sagaSorting(action: SearchSortingAction) {
  try {
    const state: TReducer = yield select();
    console.log(state.search.searchResult);

    const searchResult = state.search.searchResult.items;
    const sortingSearchResult = searchResult.sort(sort('score'));
  } catch (e) {
    yield put({ type: SEARCH_ERROR, e });
  }
}

export function* watchSearch() {
  yield takeEvery<SearchRequestAction>(SEARCH_REQUEST, sagaSearch);
  yield takeEvery<SearchSortingAction>(SEARCH_RESULT_SORTING, sagaSorting);
}
