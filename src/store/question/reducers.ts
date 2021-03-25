import { TQuestion, TQuestionInfo } from 'src/types';

import {
  QUESTION_INFO_LOADED,
  QUESTION_INFO_REQUEST,
  QUESTION_ERROR,
} from './types';
import { QuestionAction } from './actions';

const initialState: TQuestion = {
  questionInfo: {} as TQuestionInfo,
  guestionId: '',
  loading: true,
  error: null,
};

export const questionReducer = (
  state = initialState,
  action: QuestionAction,
) => {
  switch (action.type) {
    case QUESTION_INFO_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }

    case QUESTION_INFO_LOADED: {
      return {
        ...state,
        questionInfo: action.payload,
        loading: false,
        error: null,
      };
    }

    case QUESTION_ERROR: {
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
