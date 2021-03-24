import { TReducer } from 'src/types';
import {
  SEARCH_REQUEST,
  SEARCH_RESULT_LOADED,
  QUESTION_INFO_LOADED,
  QUESTION_INFO_REQUEST,
  QUICK_VIEW_PANEL_DATA_LOADED,
  QUICK_VIEW_PANEL_DATA_REQUEST,
  DATA_ERROR,
  QUESTION_ERROR,
  SEARCH_ERROR,
} from '../types';

import { Action } from '../actions';

const initialState: TReducer = {
  searchResult: {},
  searchValue: '',
  resultLoading: true,
  searchError: null,

  questionInfo: {},
  guestionId: '',
  questionLoading: true,
  questionError: null,

  viewPanelData: {},
  searchByType: null,
  searchByValue: '',
  viewPanelDataLoading: true,
  dError: null,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SEARCH_REQUEST: {
      return {
        ...state,
        resultLoading: true,
        searchError: null,
      };
    }

    case SEARCH_RESULT_LOADED: {
      return {
        ...state,
        searchResult: action.payload,
        resultLoading: false,
      };
    }

    case SEARCH_ERROR: {
      return {
        ...state,
        searchError: action.payload,
        resultLoading: false,
      };
    }

    case QUESTION_INFO_REQUEST: {
      return {
        ...state,
        questionLoading: true,
      };
    }

    case QUESTION_INFO_LOADED: {
      return {
        ...state,
        questionInfo: action.payload,
        questionLoading: false,
      };
    }

    case QUESTION_ERROR: {
      return {
        ...state,
        questionError: action.payload,
        questionLoading: false,
      };
    }

    case QUICK_VIEW_PANEL_DATA_REQUEST: {
      return {
        ...state,
        viewPanelDataLoading: true,
      };
    }

    case QUICK_VIEW_PANEL_DATA_LOADED: {
      return {
        ...state,
        viewPanelData: action.payload,
        viewPanelDataLoading: false,
      };
    }

    default:
      return state;
  }
};

export default reducer;
