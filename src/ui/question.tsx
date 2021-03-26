import React from 'react';
import { useSelector } from 'react-redux';
import { TReducer } from 'src/types';
import { Author } from './author';
import { Tags } from './tags';

export const Question = () => {
  const questionInfo = useSelector(
    (state: TReducer) => state.question.questionInfo,
  );

  return (
    <div className="question_content">
      <h2 className="question_content__title">{questionInfo.title}</h2>
      <p
        className="question_content__body"
        dangerouslySetInnerHTML={{ __html: questionInfo.body }}
      />
      <div className="question_content__info">
        <Author author={questionInfo.owner} />
        <Tags tags={questionInfo.tags} />
      </div>
    </div>
  );
};
