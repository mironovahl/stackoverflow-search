import React from 'react';
import { useDispatch } from 'react-redux';
import { searchSorting } from 'src/store/search';

export const SortButtons = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(searchSorting('owner'));
  };
  return (
    <div className="sorting">
      <p className="sorting_title">Sort by</p>
      <div className="sorting_buttons">
        <button onClick={handleClick} className="btn" type="button">
          Title
        </button>
        <button className="btn" type="button">
          Author
        </button>
        <button className="btn" type="button">
          Answers
        </button>
        <button className="btn" type="button">
          Tag
        </button>
      </div>
    </div>
  );
};
