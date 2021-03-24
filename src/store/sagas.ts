import { all } from 'redux-saga/effects';
import { watchQuestion } from './question';
import { watchSearch } from './search';
import { watchViewPanelData } from './view-panel-data';

export function* rootSaga() {
  yield all([watchSearch(), watchQuestion(), watchViewPanelData()]);
}
