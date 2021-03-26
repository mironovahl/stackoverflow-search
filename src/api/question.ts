import { apiRequest } from 'src/utils/api-request';

import { URL_API } from './constants';

export const getQuestionInfo = async (questionId: string) => {
  const urlAnswers = `${URL_API}questions/${questionId}?order=desc&sort=activity&site=stackoverflow&filter=!--1nZwT3Ejsm`;

  const data = apiRequest(urlAnswers);
  return data;
};
