import { URL_API } from './constants';

export const getAnswers = async (questionId: string) => {
  const urlAnswers = `${URL_API}questions/${questionId}/answers?order=desc&sort=activity&site=stackoverflow&filter=!9_bDE(fI5`;

  const res = await fetch(urlAnswers);
  const data = await res.json();
  return data;
};
