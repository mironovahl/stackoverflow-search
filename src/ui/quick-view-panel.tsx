import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { TReducer } from 'src/types';
import { ResultList } from './result-list';

export const QuickViewPanel = () => {
  const loading = useSelector((state: TReducer) => state.viewPanelData.loading);

  const viewPanelData = useSelector(
    (state: TReducer) => state.viewPanelData.viewPanelData,
  );
  if (loading) {
    return <p> Loading...</p>;
  }
  return (
    <div className="view-panel">
      <ResultList searchResult={viewPanelData} />
    </div>
  );
};
