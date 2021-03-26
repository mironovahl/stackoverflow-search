import React from 'react';
import { TSearchItem } from 'src/types';
import { ResultItem } from './result-item';

interface IResultListProps {
  searchResult: TSearchItem[];
  setShowPanel?: (value: boolean) => void;
  searchValue: string;
}
export const ResultList = ({
  searchResult,
  setShowPanel,
  searchValue,
}: IResultListProps) => {
  return (
    <div className="search-result_list">
      {searchResult.map(item => (
        <ResultItem
          key={item.question_id}
          searchData={item}
          setShowPanel={setShowPanel}
        />
      ))}
    </div>
  );
};
