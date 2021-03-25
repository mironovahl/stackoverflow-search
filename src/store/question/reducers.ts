import { TQuestion, TQuestionInfo } from 'src/types';

import { QUESTION_INFO_LOADED, QUESTION_INFO_REQUEST } from './types';
import { QuestionAction } from './actions';

const initialState: TQuestion = {
  questionInfo: {} as TQuestionInfo,
  guestionId: '',
  loading: true,
  questionError: null,
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
      };
    }

    case QUESTION_INFO_LOADED: {
      return {
        ...state,
        questionInfo: action.payload,
        loading: false,
      };
    }

    default:
      return state;
  }
};
