import { QUESTION_INFO_LOADED, QUESTION_INFO_REQUEST } from './types';

export const questionRequest = (questionId: string) =>
  ({
    type: QUESTION_INFO_REQUEST,
    payload: questionId,
  } as const);

export const questionLoaded = (questionInfo: any) =>
  ({
    type: QUESTION_INFO_LOADED,
    payload: questionInfo,
  } as const);

export type QuestionRequestAction = ReturnType<typeof questionRequest>;
export type QuestionLoadedAction = ReturnType<typeof questionLoaded>;

export type QuestionAction = QuestionLoadedAction | QuestionRequestAction;
