import { TSearchBy } from 'src/types';
import {
  QUESTION_INFO_LOADED,
  QUESTION_INFO_REQUEST,
  SEARCH_REQUEST,
  SEARCH_RESULT_LOADED,
  QUICK_VIEW_PANEL_DATA_LOADED,
  QUICK_VIEW_PANEL_DATA_REQUEST,
  SEARCH_ERROR,
} from '../types';

export const resultLoaded = (searchResult: any) => ({
  type: SEARCH_RESULT_LOADED,
  payload: searchResult,
});

export const resultRequest = (searchValue: string) =>
  ({
    type: SEARCH_REQUEST,
    payload: searchValue,
  } as const);

export const resultFailed = (error: any) => ({
  type: SEARCH_ERROR,
  payload: error,
});

export const questionRequest = (questionId: string) =>
  ({
    type: QUESTION_INFO_REQUEST,
    payload: questionId,
  } as const);

export const questionLoaded = (questionInfo: any) => ({
  type: QUESTION_INFO_LOADED,
  payload: questionInfo,
});

export const viewPanelDataRequest = (
  searchByType: TSearchBy,
  searchByValue: string,
) =>
  ({
    type: QUICK_VIEW_PANEL_DATA_REQUEST,
    payload: { searchByType, searchByValue },
  } as const);

export const viewPanelDataLoaded = (viewPanelData: any) =>
  ({
    type: QUICK_VIEW_PANEL_DATA_LOADED,
    payload: viewPanelData,
  } as const);

export type ResultRequestAction = ReturnType<typeof resultRequest>;
export type QuestionRequestAction = ReturnType<typeof questionRequest>;
export type ViewPanelDataRequestAction = ReturnType<
  typeof viewPanelDataRequest
>;

export type Action =
  | ResultRequestAction
  | QuestionRequestAction
  | ViewPanelDataRequestAction;
