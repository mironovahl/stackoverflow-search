import { URL_API } from './constants';

export const getQuestionInfo = async (questionId: string) => {
  const urlQuestion = `${URL_API}questions/${questionId}?order=desc&sort=activity&site=stackoverflow`;

  const res = await fetch(urlQuestion);
  const data = await res.json();
  return data;
};
