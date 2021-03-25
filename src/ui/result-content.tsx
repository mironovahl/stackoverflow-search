import React from 'react';
import { SortButtons } from 'src/pages/sort-buttons';
import { TSearchItem } from 'src/types';
import { ResultList } from './result-list';

interface IResultListProps {
  searchResult: TSearchItem[];
  setShowPanel?: (value: boolean) => void;
}
export const ResultContent = ({
  searchResult,
  setShowPanel,
}: IResultListProps) => {
  const hasResult = searchResult.length !== 0;

  if (!hasResult) {
    return <p>Result not found</p>;
  }

  return (
    <div className="k">
      <SortButtons />
      <ResultList searchResult={searchResult} setShowPanel={setShowPanel} />
    </div>
  );
};
