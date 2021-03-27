import React from 'react';
import { useSelector } from 'react-redux';

import { TState } from 'src/types';
import { Spinner } from 'src/ui/spinner';

import { ResultList } from './result-list';

export const QuickViewPanel = () => {
  const loading = useSelector((state: TState) => state.viewPanelData.loading);
  const error = useSelector((state: TState) => state.viewPanelData.error);

  const viewPanelData = useSelector(
    (state: TState) => state.viewPanelData.viewPanelData,
  );
  const value = useSelector(
    (state: TState) => state.viewPanelData.searchByValue,
  );
  const type = useSelector(
    (state: TState) => state.viewPanelData.searchByType,
  );

  const hasResult = viewPanelData.length !== 0;

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p>Something went wrong...</p>;
  }

  if (!hasResult) {
    return <p>Result not found</p>;
  }

  const typeQuestions = type === 'tag' ? 'tagged' : 'the users id';

  return (
    <div className="quick-view-panel">
      <p className="result_title">
        Questions {typeQuestions} <strong>{value}</strong>
      </p>

      <ResultList searchResult={viewPanelData} />
    </div>
  );
};
