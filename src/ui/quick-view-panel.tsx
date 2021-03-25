import React from 'react';
import { useSelector } from 'react-redux';
import { TReducer } from 'src/types';
import { ResultList } from './result-list';
import { Spinner } from './spinner';

export const QuickViewPanel = () => {
  const loading = useSelector((state: TReducer) => state.viewPanelData.loading);

  const viewPanelData = useSelector(
    (state: TReducer) => state.viewPanelData.viewPanelData,
  );
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="view-panel">
      <ResultList searchResult={viewPanelData} />
    </div>
  );
};
