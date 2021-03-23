import { TReducer } from 'src/types';
import {
  SEARCH_REQUEST,
  SEARCH_RESULT_LOADED,
  QUESTION_INFO_LOADED,
  QUESTION_INFO_REQUEST,
  QUICK_VIEW_PANEL_DATA_LOADED,
  QUICK_VIEW_PANEL_DATA_REQUEST,
} from '../types';

const initialState: TReducer = {
  searchResult: {},
  searchValue: '',
  resultLoading: true,

  questionInfo: {},
  guestionId: '',
  questionLoading: true,

  viewPanelData: {},
  searchByType: null,
  searchByValue: '',
  viewPanelDataLoading: true,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SEARCH_REQUEST: {
      return {
        ...state,
        resultLoading: true,
      };
    }

    case SEARCH_RESULT_LOADED: {
      return {
        ...state,
        searchResult: action.payload,
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
