import React from 'react';
import { useSelector } from 'react-redux';

import { TState } from 'src/types';
import { Spinner } from 'src/ui/spinner';

import { ResultList } from './result-list';

export const QuickViewPanel = () => {
  const viewPanel = useSelector((state: TState) => state.viewPanelData);

  const {
    error,
    loading,
    searchByValue,
    searchByType,
    viewPanelData,
  } = viewPanel;

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

  const typeQuestions = searchByType === 'tag' ? 'tagged' : 'the users id';

  return (
    <div className="quick-view-panel">
      <p className="result_title">
        Questions {typeQuestions} <strong>{searchByValue}</strong>
      </p>

      <ResultList searchResult={viewPanelData} />
    </div>
  );
};
