import React from 'react';
import { Link } from 'react-router-dom';

interface IRowTable {
  setShowPanel?: (value: boolean) => void;
  searchData: any;
}

export const ResultItem = ({ searchData, setShowPanel }: IRowTable) => {
  const openQuickViewPanel = () => setShowPanel && setShowPanel(true);

  const { owner } = searchData;

  const renderTags = (tags: string[]) => tags.map(tag => <span>{tag}</span>);

  return (
    <div className="search-result_item">
      <Link
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
      <div className="search-result_item__author" onClick={openQuickViewPanel}>
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
