import { URL_API } from './constants';

export const getQuestionsBySearchQuery = async (searchValue: string) => {
  const urlSearch = `${URL_API}search?order=desc&sort=activity&intitle=${searchValue}&site=stackoverflow`;

  const res = await fetch(urlSearch);
  const data = await res.json();
  return data;
};

export const getQuestionsByTag = async (tag: string) => {
  const urlSearch = `${URL_API}search?order=desc&sort=activity&tagged=${tag}&site=stackoverflow`;

  const res = await fetch(urlSearch);
  const data = await res.json();
  return data;
};
