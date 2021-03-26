import { TSearch } from 'src/types';

import {
  SEARCH_REQUEST,
  SEARCH_RESULT_LOADED,
  SEARCH_RESULT_SORTING,
  SEARCH_ERROR,
  SEARCH_RESULT_SORTED,
} from './types';
import { SearchAction } from './actions';

const initialState: TSearch = {
  searchResult: [],
  searchValue: '',
  loading: true,
  error: null,
  sortBy: null,
};

export const searchReducer = (state = initialState, action: SearchAction) => {
  switch (action.type) {
    case SEARCH_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }

    case SEARCH_RESULT_LOADED: {
      return {
        ...state,
        searchResult: action.payload,
        loading: false,
        error: null,
      };
    }

    case SEARCH_RESULT_SORTING: {
      return {
        ...state,
        sortBy: action.payload,
        loading: false,
        error: null,
      };
    }
    case SEARCH_RESULT_SORTED: {
      return {
        ...state,
        searchResult: action.payload,
        loading: false,
        error: null,
      };
    }

    case SEARCH_ERROR: {
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
