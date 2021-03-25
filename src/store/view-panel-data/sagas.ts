import { put, call, takeEvery } from 'redux-saga/effects';
import { getQuestionsByTag, getQuestionsByUser } from 'src/api';
import { TSearchBy, TSearchResponse } from 'src/types';
import { ViewPanelDataRequestAction } from './actions';
import {
  QUICK_VIEW_PANEL_DATA_LOADED,
  QUICK_VIEW_PANEL_DATA_REQUEST,
  VIEW_PANEL_DATA_ERROR,
} from './types';

export const fetchViewPanelData = async (
  searchByType: TSearchBy,
  searchByValue: string | number,
) => {
  let data;
  if (searchByType === 'tag') {
    data = await getQuestionsByTag(searchByValue as string);
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

    const viewPanelData = response.items;
    yield put({ type: QUICK_VIEW_PANEL_DATA_LOADED, payload: viewPanelData });
  } catch (e) {
    yield put({ type: VIEW_PANEL_DATA_ERROR, payload: e });
  }
}

export function* watchViewPanelData() {
  yield takeEvery<ViewPanelDataRequestAction>(
    QUICK_VIEW_PANEL_DATA_REQUEST,
    sagaGetViewPanelData,
  );
}
