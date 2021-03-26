import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useQuery } from 'src/utils';
import { TState } from 'src/types';
import { QuickViewPanel } from 'src/search-result/quick-view-panel';
import { searchRequest } from 'src/store/search';
import { Spinner } from 'src/ui/spinner';
import { ResultList } from 'src/search-result/result-list';

import { SortButtons } from './sort-buttons';

export const SearchResultPage = () => {
  const query = useQuery();
  const searchQuery = query.get('q') as '';

  const [showPanel, setShowPanel] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchRequest(searchQuery));
  }, [searchQuery]);

  const searchResult = useSelector(
    (state: TState) => state.search.searchResult,
  );
  const loading = useSelector((state: TState) => state.search.loading);
  const error = useSelector((state: TState) => state.search.error);

  const viewPanelDataLoading = useSelector(
    (state: TState) => state.viewPanelData.loading,
  );

  useEffect(() => {
    const quickViewPanel = document.querySelector('.quick-view-panel');

    if (quickViewPanel) {
      quickViewPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [viewPanelDataLoading]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p>Something went wrong...</p>;
  }

  return (
    <div className="search-result">
      <div className="wrapper">
        <SortButtons />
        <div className="result_content">
          <div>
            <p className="result_title">
              Search result for <strong>{searchQuery}</strong>
            </p>

            <ResultList
              searchResult={searchResult}
              setShowPanel={setShowPanel}
            />
          </div>
          {showPanel && <QuickViewPanel />}
        </div>
      </div>
    </div>
  );
};
