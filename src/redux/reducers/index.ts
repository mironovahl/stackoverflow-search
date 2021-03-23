import { TReducer } from 'src/types';
import {
  SEARCH_REQUEST,
  SEARCH_RESULT_LOADED,
  QUESTION_INFO_LOADED,
  QUESTION_INFO_REQUEST,
} from '../types';

const initialState: TReducer = {
  searchResult: {},
  searchValue: '',
  resultLoading: false,

  questionInfo: {},
  guestionId: '',
  questionLoading: false,
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

    default:
      return state;
  }
};

export default reducer;
