import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { questionRequest } from 'src/store/question';
import { TReducer } from 'src/types';
import { Answers } from 'src/ui/answers';
import { Question } from 'src/ui/question';
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

  const loading = useSelector((state: TReducer) => state.question.loading);
  const error = useSelector((state: TReducer) => state.question.error);

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
