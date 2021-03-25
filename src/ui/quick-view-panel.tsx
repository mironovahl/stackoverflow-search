import React from 'react';
import { useSelector } from 'react-redux';
import { TReducer } from 'src/types';
import { ResultContent } from './result-content';
import { Spinner } from './spinner';

export const QuickViewPanel = () => {
  const loading = useSelector((state: TReducer) => state.viewPanelData.loading);
  const error = useSelector((state: TReducer) => state.viewPanelData.error);

  const viewPanelData = useSelector(
    (state: TReducer) => state.viewPanelData.viewPanelData,
  );

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p>Something went wrong...</p>;
  }

  return (
    <>
      <ResultContent searchResult={viewPanelData} />
    </>
  );
};
