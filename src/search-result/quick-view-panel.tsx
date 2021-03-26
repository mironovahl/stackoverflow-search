import React from 'react';
import { useSelector } from 'react-redux';

import { TReducer } from 'src/types';
import { Spinner } from 'src/ui/spinner';

import { ResultList } from './result-list';

export const QuickViewPanel = () => {
  const loading = useSelector((state: TReducer) => state.viewPanelData.loading);
  const error = useSelector((state: TReducer) => state.viewPanelData.error);

  const viewPanelData = useSelector(
    (state: TReducer) => state.viewPanelData.viewPanelData,
  );
  const value = useSelector(
    (state: TReducer) => state.viewPanelData.searchByValue,
  );
  const type = useSelector(
    (state: TReducer) => state.viewPanelData.searchByType,
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
