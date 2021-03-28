import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { questionRequest } from 'src/store/question';
import { TState } from 'src/types';
import { Answers } from 'src/pages/question/answers';
import { Question } from 'src/pages/question/question';
import { Spinner } from 'src/ui/spinner';

interface IParams {
  id: string;
}

export const QuestionPage = () => {
  const { id } = useParams<IParams>();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(questionRequest(id));
  }, [id]);

  const question = useSelector((state: TState) => state.question);

  if (question.loading) {
    return <Spinner />;
  }

  if (question.error) {
    return <p>Something went wrong...</p>;
  }

  return (
    <div className="question">
      <div className="wrapper">
        <Question />
        <Answers />
      </div>
    </div>
  );
};
