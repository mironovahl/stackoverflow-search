import { TQuestion, TQuestionInfo } from 'src/types';

import {
  QUESTION_INFO_LOADED,
  QUESTION_INFO_REQUEST,
  QUESTION_ERROR,
} from './types';
import { QuestionAction } from './actions';

const defaultOwner: TQuestionInfo['owner'] = {
  display_name: '',
  link: '',
  profile_image: '',
  reputation: 0,
  user_id: 0,
  user_type: '',
};

const defaultQuestionInfo: TQuestionInfo = {
  answer_count: 0,
  answers: [],
  body: '',
  creation_date: new Date(),
  is_answered: false,
  last_activity_date: new Date(),
  link: '',
  owner: defaultOwner,
  question_id: 0,
  score: 0,
  tags: [],
  title: '',
  view_count: 0,
};

const initialState: TQuestion = {
  questionInfo: defaultQuestionInfo,
  questionId: '',
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
