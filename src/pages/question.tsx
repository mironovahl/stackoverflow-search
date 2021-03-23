import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { questionRequest } from 'src/redux/actions';
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

  const loading = useSelector((state: TReducer) => state.questionLoading);
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="wrapper">
      <div className="question">
        <Question />
        <Answers />
      </div>
    </div>
  );
};
