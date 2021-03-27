import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { viewPanelDataRequest } from 'src/store/view-panel-data';
import { TSearchBy, TSearchItem } from 'src/types';
import { Author } from 'src/ui/author';
import { Tags } from 'src/ui/tags';

interface IRowTable {
  setShowPanel?: (value: boolean) => void;
  searchData: TSearchItem;
}

export const ResultItem = ({ searchData, setShowPanel }: IRowTable) => {
  const dispatch = useDispatch();
  const openQuickViewPanel = (type: TSearchBy, value: number | string) => {
    if (setShowPanel && type) {
      dispatch(viewPanelDataRequest(type, value));
      setShowPanel(true);
    }
  };

  const handleClickAuthor = (userId: number) => {
    openQuickViewPanel('author', userId);
  };

  const { owner } = searchData;

  return (
    <div className="search-result_item">
      <Link
        className="search-result_item__theme"
        to={`/question/${searchData.questionId}`}
      >
        {searchData.title}
      </Link>
      <Link
        className="search-result_item__answers"
        to={`/question/${searchData.questionId}`}
      >
        <span>{searchData.answerCount}</span>
        <span> answers </span>
      </Link>
      <div className="search-result_item__info">
        <Author handleClick={handleClickAuthor} author={owner} />
        <Tags handleClick={openQuickViewPanel} tags={searchData.tags} />
      </div>
    </div>
  );
};
