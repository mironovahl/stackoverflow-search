import { TQuestionInfo } from 'src/types';
import {
  QUESTION_INFO_LOADED,
  QUESTION_INFO_REQUEST,
  QUESTION_ERROR,
} from './types';

export const questionRequest = (questionId: string) =>
  ({
    type: QUESTION_INFO_REQUEST,
    payload: questionId,
  } as const);

export const questionLoaded = (questionInfo: TQuestionInfo) =>
  ({
    type: QUESTION_INFO_LOADED,
    payload: questionInfo,
  } as const);

export const questionFailed = (error: string) =>
  ({
    type: QUESTION_ERROR,
    payload: error,
  } as const);

export type QuestionRequestAction = ReturnType<typeof questionRequest>;
export type QuestionLoadedAction = ReturnType<typeof questionLoaded>;
export type QuestionFailedAction = ReturnType<typeof questionFailed>;

export type QuestionAction =
  | QuestionLoadedAction
  | QuestionRequestAction
  | QuestionFailedAction;
