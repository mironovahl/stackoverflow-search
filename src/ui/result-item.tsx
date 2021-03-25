import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { viewPanelDataRequest } from 'src/store/view-panel-data';
import { TSearchBy } from 'src/types';

interface IRowTable {
  setShowPanel?: (value: boolean) => void;
  searchData: any;
}

export const ResultItem = ({ searchData, setShowPanel }: IRowTable) => {
  const dispatch = useDispatch();
  const openQuickViewPanel = (type: TSearchBy, value: string) => {
    if (setShowPanel && type) {
      dispatch(viewPanelDataRequest(type, value));
      setShowPanel(true);
    }
  };

  const { owner } = searchData;

  const renderTags = (tags: string[]) => tags.map(tag => <span>{tag}</span>);

  return (
    <div className="search-result_item">
      <Link
        target="_blank"
        rel="noopener noreferrer"
        className="search-result_item__theme"
        to={`/question/${searchData.question_id}`}
      >
        {searchData.title}
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        className="search-result_item__answers"
        to={`/question/${searchData.question_id}`}
      >
        <span>{searchData.answer_count}</span>
        <span> answers </span>
      </Link>
      <div
        className="search-result_item__author"
        onClick={() => openQuickViewPanel('author', '10963451')}
      >
        <img
          className="search-result_item__author_avatar"
          src={owner.profile_image}
          alt=""
        />
        <p className="search-result_item__author_name">
          {searchData.owner.display_name}
        </p>
      </div>
      <p className="search-result_item__tags">{renderTags(searchData.tags)}</p>
    </div>
  );
};
