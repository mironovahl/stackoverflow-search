import { TSearchItem, TSortBy } from 'src/types';
import {
  SEARCH_REQUEST,
  SEARCH_RESULT_LOADED,
  SEARCH_RESULT_SORTING,
  SEARCH_ERROR,
  SEARCH_RESULT_SORTED,
} from './types';

export const searchLoaded = (searchResult: TSearchItem[]) =>
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

export const searchSorted = (resultSorting: TSearchItem[]) =>
  ({
    type: SEARCH_RESULT_SORTED,
    payload: resultSorting,
  } as const);

export const searchFailed = (error: string) =>
  ({
    type: SEARCH_ERROR,
    payload: error,
  } as const);

export type SearchRequestAction = ReturnType<typeof searchRequest>;
export type SearchLoadedAction = ReturnType<typeof searchLoaded>;
export type SearchSortingAction = ReturnType<typeof searchSorting>;
export type SearchSortedAction = ReturnType<typeof searchSorted>;
export type ResultFailedAction = ReturnType<typeof searchFailed>;

export type SearchAction =
  | SearchRequestAction
  | SearchLoadedAction
  | SearchSortingAction
  | SearchSortedAction
  | ResultFailedAction;
