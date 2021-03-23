import { TReducer } from 'src/types';
import { SEARCH_REQUEST, SEARCH_RESULT_LOADED } from '../types';

const initialState: TReducer = {
  searchResult: {},
  searchValue: '',
  resultLoading: false,
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

    default:
      return state;
  }
};

export default reducer;
