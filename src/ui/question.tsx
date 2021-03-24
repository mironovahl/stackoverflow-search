import React from 'react';
import { useSelector } from 'react-redux';
import { TReducer } from 'src/types';

export const Question = () => {
  const questionInfo = useSelector(
    (state: TReducer) => state.question.questionInfo,
  );

  return (
    <div className="question_info">
      <h2 className="question_info__title">{questionInfo.items[0].title}</h2>
      <p
        className="question_info__body"
        dangerouslySetInnerHTML={{ __html: questionInfo.items[0].body }}
      />
      <p>{questionInfo.items[0].answer_count} Answers</p>
    </div>
  );
};
