import { SEARCH_REQUEST, SEARCH_RESULT_LOADED } from '../types';

export const resultLoaded = (searchResult: any) => ({
  type: SEARCH_RESULT_LOADED,
  payload: searchResult,
});

export const resultLoad = (searchValue: string) =>
  ({
    type: SEARCH_REQUEST,
    payload: searchValue,
  } as const);

export type ResultLoadAction = ReturnType<typeof resultLoad>;
