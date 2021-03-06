import { put, call, takeEvery, select } from 'redux-saga/effects';

import { getQuestionsByTag, getQuestionsByUser } from 'src/api';
import { TState, TSearchBy, TSearchResponse } from 'src/types';
import { getSortByType, convertToCamelCase } from 'src/utils';

import {
  ViewPanelDataRequestAction,
  ViewPanelDataSortingAction,
} from './actions';
import {
  QUICK_VIEW_PANEL_DATA_LOADED,
  QUICK_VIEW_PANEL_DATA_REQUEST,
  QUICK_VIEW_PANEL_DATA_SORTING,
  QUICK_VIEW_PANEL_DATA_SORTED,
  VIEW_PANEL_DATA_ERROR,
} from './types';

export const fetchViewPanelData = async (
  searchByType: TSearchBy,
  searchByValue: string | number,
) => {
  let data;
  if (searchByType === 'tag') {
    data = await getQuestionsByTag(String(searchByValue));
  }

  if (searchByType === 'author') {
    data = await getQuestionsByUser(searchByValue);
  }

  return data;
};

function* sagaGetViewPanelData(action: ViewPanelDataRequestAction) {
  try {
    const response: TSearchResponse = yield call(
      fetchViewPanelData,
      action.payload.searchByType,
      action.payload.searchByValue,
    );
    const viewPanelData = response.items.map(convertToCamelCase);
    yield put({ type: QUICK_VIEW_PANEL_DATA_LOADED, payload: viewPanelData });
  } catch (e) {
    yield put({ type: VIEW_PANEL_DATA_ERROR, payload: e });
  }
}

function* sagaSorting(action: ViewPanelDataSortingAction) {
  try {
    const state: TState = yield select();
    const viewPanelData = Array.from(state.viewPanelData.viewPanelData);
    const sortingResult = viewPanelData.sort(getSortByType(action.payload));

    yield put({
      type: QUICK_VIEW_PANEL_DATA_SORTED,
      payload: sortingResult,
    });
  } catch (e) {
    yield put({ type: VIEW_PANEL_DATA_ERROR, payload: e });
  }
}

export function* watchViewPanelData() {
  yield takeEvery<ViewPanelDataRequestAction>(
    QUICK_VIEW_PANEL_DATA_REQUEST,
    sagaGetViewPanelData,
  );
  yield takeEvery<ViewPanelDataSortingAction>(
    QUICK_VIEW_PANEL_DATA_SORTING,
    sagaSorting,
  );
}
