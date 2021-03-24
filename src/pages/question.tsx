import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { questionRequest } from 'src/store/question';
import { TReducer } from 'src/types';
import { Answers } from 'src/ui/answers';
import { Question } from 'src/ui/question';

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
  if (loading) {
    return <p>Loading...</p>;
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
