import { combineReducers } from 'redux';
import { questionReducer } from './question';
import { searchReducer } from './search';
import { viewPanelDataReducer } from './view-panel-data';

export const rootReducer = combineReducers({
  search: searchReducer,
  viewPanelData: viewPanelDataReducer,
  question: questionReducer,
});
