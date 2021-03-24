import { TSortBy } from 'src/types';
import {
  SEARCH_REQUEST,
  SEARCH_RESULT_LOADED,
  SEARCH_RESULT_SORTING,
  SEARCH_ERROR,
} from './types';

export const searchLoaded = (searchResult: any) =>
  ({
    type: SEARCH_RESULT_LOADED,
    payload: searchResult,
  } as const);

export const searchRequest = (searchValue: string) =>
  ({
    type: SEARCH_REQUEST,
    payload: searchValue,
  } as const);

export const searchSorting = (sortBy: TSortBy) =>
  ({
    type: SEARCH_RESULT_SORTING,
    payload: sortBy,
  } as const);

export const searchFailed = (error: any) =>
  ({
    type: SEARCH_ERROR,
    payload: error,
  } as const);

export type SearchRequestAction = ReturnType<typeof searchRequest>;
export type SearchLoadedAction = ReturnType<typeof searchLoaded>;
export type SearchSortingAction = ReturnType<typeof searchSorting>;
export type ResultFailedAction = ReturnType<typeof searchFailed>;

export type SearchAction =
  | SearchRequestAction
  | SearchLoadedAction
  | SearchSortingAction
  | ResultFailedAction;
