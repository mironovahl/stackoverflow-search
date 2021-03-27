import { apiRequest } from 'src/utils';

import { URL_API } from './constants';

export const getQuestionsBySearchQuery = async (searchValue: string) => {
  const urlSearch = `${URL_API}search?order=desc&sort=activity&intitle=${searchValue}&site=stackoverflow`;

  const data = apiRequest(urlSearch);
  return data;
};

export const getQuestionsByTag = async (tag: string) => {
  const urlSearchByTag = `${URL_API}search?order=desc&sort=activity&tagged=${tag}&site=stackoverflow`;

  const data = await apiRequest(urlSearchByTag);
  return data;
};

export const getQuestionsByUser = async (userId: string | number) => {
  const urlSearchByUser = `${URL_API}users/${userId}/questions?order=desc&sort=votes&site=stackoverflow`;

  const data = apiRequest(urlSearchByUser);
  return data;
};
