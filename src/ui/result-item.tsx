import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { viewPanelDataRequest } from 'src/store/view-panel-data';
import { TReducer, TSearchBy, TSearchItem } from 'src/types';
import { getCamelCase } from 'src/utils/get-camel-case';
import { Author } from './author';
import { Tags } from './tags';

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

  const loading = useSelector((state: TReducer) => state.viewPanelData.loading);

  useEffect(() => {
    const quickViewPanel = document.querySelector('.quick-view-panel');

    if (quickViewPanel) {
      quickViewPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [loading]);

  const handleClickAuthor = (userId: number) => {
    openQuickViewPanel('author', userId);
  };

  console.log(getCamelCase(searchData));
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
