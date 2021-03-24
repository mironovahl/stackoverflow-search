import { TViewPanelData } from 'src/types';

import {
  QUICK_VIEW_PANEL_DATA_LOADED,
  QUICK_VIEW_PANEL_DATA_REQUEST,
} from './types';
import { ViewPanelDataAction } from './actions';

const initialState: TViewPanelData = {
  viewPanelData: {},
  searchByType: null,
  searchByValue: '',
  loading: true,
  error: null,
};

export const viewPanelDataReducer = (
  state = initialState,
  action: ViewPanelDataAction,
) => {
  switch (action.type) {
    case QUICK_VIEW_PANEL_DATA_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case QUICK_VIEW_PANEL_DATA_LOADED: {
      return {
        ...state,
        viewPanelData: action.payload,
        loading: false,
      };
    }

    default:
      return state;
  }
};
