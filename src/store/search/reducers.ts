import { TSearch } from 'src/types';

import { SEARCH_REQUEST, SEARCH_RESULT_LOADED, SEARCH_ERROR } from './types';
import { SearchAction } from './actions';

const initialState: TSearch = {
  searchResult: {},
  searchValue: '',
  loading: true,
  searchError: null,
};

export const searchReducer = (state = initialState, action: SearchAction) => {
  switch (action.type) {
    case SEARCH_REQUEST: {
      return {
        ...state,
        loading: true,
        searchError: null,
      };
    }

    case SEARCH_RESULT_LOADED: {
      return {
        ...state,
        searchResult: action.payload,
        loading: false,
      };
    }

    case SEARCH_ERROR: {
      return {
        ...state,
        searchError: action.payload,
        loading: false,
      };
    }

    default:
      return state;
  }
};
