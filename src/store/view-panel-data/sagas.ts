import { put, call, takeLatest } from 'redux-saga/effects';
import { getQuestionsByTag, getQuestionsByUser } from 'src/api';
import { TSearchBy } from 'src/types';
import { ViewPanelDataRequestAction } from './actions';
import {
  QUICK_VIEW_PANEL_DATA_LOADED,
  QUICK_VIEW_PANEL_DATA_REQUEST,
} from './types';

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

function* sagaGetViewPanelData(action: ViewPanelDataRequestAction) {
  const payload: { data: any } = yield call(
    fetchViewPanelData,
    action.payload.searchByType,
    action.payload.searchByValue,
  );
  yield put({ type: QUICK_VIEW_PANEL_DATA_LOADED, payload });
}

export function* watchViewPanelData() {
  yield takeLatest<ViewPanelDataRequestAction>(
    QUICK_VIEW_PANEL_DATA_REQUEST,
    sagaGetViewPanelData,
  );
}
