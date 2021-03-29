import React from 'react';
import { useSelector } from 'react-redux';
import { TState } from 'src/types';

export const Answers = () => {
  const questionInfo = useSelector(
    (state: TState) => state.question.questionInfo,
  );

  const hasAnswers = questionInfo.answerCount > 0;

  return (
    <div className="answers">
      <p className="answers-count">{questionInfo.answerCount} Answers</p>

      {hasAnswers &&
        questionInfo.answers.map(item => (
          <div className="answers_item" key={item.answerId}>
            <span className="answers_item__score">{item.score}</span>
            {/* It's not safe, although StackOverflow API sends HTML.
             There are a few sanitize libraries,
             but we cannot use them according to technical requirements  */}
            {/* eslint-disable-next-line react/no-danger */}
            <div dangerouslySetInnerHTML={{ __html: item.body }} />
          </div>
        ))}
    </div>
  );
};
