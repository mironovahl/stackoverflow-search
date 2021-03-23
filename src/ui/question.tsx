import React from 'react';
import { useSelector } from 'react-redux';
import { TReducer } from 'src/types';

export const Question = () => {
  const loading = useSelector((state: TReducer) => state.questionLoading);

  const questionInfo = useSelector((state: TReducer) => state.questionInfo);
  if (!questionInfo.items) {
    return <p>Loading...</p>;
  }
  console.log(loading);
  console.log(questionInfo);
  return (
    <div>
      <h2>{questionInfo.items[0].title}</h2>
      <p dangerouslySetInnerHTML={{ __html: questionInfo.items[0].body }} />
      <p>{questionInfo.items[0].answer_count} Answers</p>
    </div>
  );
};
