import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { questionRequest } from 'src/store/question';
import { TState } from 'src/types';
import { Answers } from 'src/question/answers';
import { Question } from 'src/question/question';
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

  const loading = useSelector((state: TState) => state.question.loading);
  const error = useSelector((state: TState) => state.question.error);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
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
