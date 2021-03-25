import React from 'react';
import { useDispatch } from 'react-redux';
import { searchSorting } from 'src/store/search';
import { viewPanelDataSorting } from 'src/store/view-panel-data';
import { TSortBy } from 'src/types';

export const SortButtons = () => {
  const dispatch = useDispatch();
  const handleClick = (value: TSortBy) => {
    dispatch(searchSorting(value));
    dispatch(viewPanelDataSorting(value));
  };

  return (
    <div className="sorting">
      <p className="sorting_title">Sort by</p>
      <div className="sorting_buttons">
        <button
          onClick={() => handleClick('title')}
          className="btn"
          type="button"
        >
          Title
        </button>
        <button
          className="btn"
          type="button"
          onClick={() => handleClick('owner')}
        >
          Author
        </button>
        <button
          className="btn"
          type="button"
          onClick={() => handleClick('answer_count')}
        >
          Answers
        </button>
        <button
          className="btn"
          type="button"
          onClick={() => handleClick('tags')}
        >
          Tag
        </button>
      </div>
    </div>
  );
};
