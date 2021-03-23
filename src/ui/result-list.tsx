import React from 'react';
import { ResultItem } from './result-item';

interface IResultListProps {
  searchResult: any;
  setShowPanel?: (value: boolean) => void;
}
export const ResultList = ({
  searchResult,
  setShowPanel,
}: IResultListProps) => {
  const { items } = searchResult;

  return (
    <div className="search-result_list">
      {items.map((item: any) => (
        <ResultItem searchData={item} setShowPanel={setShowPanel} />
      ))}
    </div>
  );
};
