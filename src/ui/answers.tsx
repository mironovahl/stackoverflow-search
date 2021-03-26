import React from 'react';
import { useSelector } from 'react-redux';
import { TReducer } from 'src/types';

export const Answers = () => {
  const questionInfo = useSelector(
    (state: TReducer) => state.question.questionInfo,
  );

  const hasAnswers = questionInfo.answer_count > 0;

  return (
    <div className="answers">
      <p className="answers-count">{questionInfo.answer_count} Answers</p>

      {hasAnswers &&
        questionInfo.answers.map(item => (
          <div className="answers_item" key={item.answer_id}>
            <span className="answers_item__score">{item.score}</span>
            <div dangerouslySetInnerHTML={{ __html: item.body }} />
          </div>
        ))}
    </div>
  );
};
