import React from 'react';
import { useSelector } from 'react-redux';

import { TReducer } from 'src/types';
import { Author } from 'src/ui/author';
import { Tags } from 'src/ui/tags';

export const Question = () => {
  const questionInfo = useSelector(
    (state: TReducer) => state.question.questionInfo,
  );

  return (
    <div className="question_content">
      <h2 className="question_content__title">{questionInfo.title}</h2>
      <p
        className="question_content__body"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: questionInfo.body }}
      />
      <div className="question_content__info">
        <Author author={questionInfo.owner} />
        <Tags tags={questionInfo.tags} />
      </div>
    </div>
  );
};
