import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchSorting } from 'src/store/search';
import { viewPanelDataSorting } from 'src/store/view-panel-data';
import { sortByEnum, sortByItem, TSortBy, TState } from 'src/types';

export const sortByItems: sortByItem[] = [
  {
    label: sortByEnum.sortByTitle,
    value: 'title',
  },
  {
    label: sortByEnum.sortByAuthor,
    value: 'owner',
  },
  {
    label: sortByEnum.sortByAnswers,
    value: 'answerCount',
  },
  {
    label: sortByEnum.sortByTags,
    value: 'tags',
  },
];

export const SortButtons = () => {
  const dispatch = useDispatch();
  const sortByValue = useSelector((state: TState) => state.search.sortBy);
  const handleClick = (value: TSortBy) => {
    dispatch(searchSorting(value));
    dispatch(viewPanelDataSorting(value));
  };

  return (
    <div className="sorting">
      <p className="sorting_title">Sort by</p>
      <div className="sorting_buttons">
        {sortByItems.map(item => {
          const isActive = sortByValue === item.value;
          return (
            <button
              key={item.value}
              onClick={() => handleClick(item.value)}
              className={`btn ${isActive && 'active'}`}
              type="button"
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
