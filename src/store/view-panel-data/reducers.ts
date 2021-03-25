import { TViewPanelData } from 'src/types';

import {
  QUICK_VIEW_PANEL_DATA_LOADED,
  QUICK_VIEW_PANEL_DATA_REQUEST,
  QUICK_VIEW_PANEL_DATA_SORTED,
  QUICK_VIEW_PANEL_DATA_SORTING,
  VIEW_PANEL_DATA_ERROR,
} from './types';
import { ViewPanelDataAction } from './actions';

const initialState: TViewPanelData = {
  viewPanelData: [],
  searchByType: null,
  searchByValue: '',
  sortBy: null,
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
        error: null,
      };
    }

    case QUICK_VIEW_PANEL_DATA_LOADED: {
      return {
        ...state,
        viewPanelData: action.payload,
        loading: false,
        error: null,
      };
    }

    case QUICK_VIEW_PANEL_DATA_SORTING: {
      return {
        ...state,
        sortBy: action.payload,
        loading: false,
        error: null,
      };
    }
    case QUICK_VIEW_PANEL_DATA_SORTED: {
      return {
        ...state,
        viewPanelData: action.payload,
        loading: false,
        error: null,
      };
    }

    case VIEW_PANEL_DATA_ERROR: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }

    default:
      return state;
  }
};
