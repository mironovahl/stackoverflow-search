import React from 'react';
import { useSelector } from 'react-redux';
import { TReducer } from 'src/types';

export const Answers = () => {
  const questionInfo = useSelector(
    (state: TReducer) => state.question.questionInfo,
  );

  return (
    <div className="answers">
      {questionInfo.items.map((item: any) => (
        <div className="answers_item" key={item.answer_id}>
          <span className="answers_item__score">{item.score}</span>
          <div dangerouslySetInnerHTML={{ __html: item.body }} />
        </div>
      ))}
    </div>
  );
};
