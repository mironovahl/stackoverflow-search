import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useQuery } from 'src/utils';
import { TState } from 'src/types';
import { QuickViewPanel } from 'src/pages/search-result/quick-view-panel';
import { searchRequest } from 'src/store/search';
import { Spinner } from 'src/ui/spinner';
import { ResultList } from 'src/pages/search-result/result-list';

import { SortButtons } from './sort-buttons';

export const SearchResultPage = () => {
  const query = useQuery();
  const searchQuery = query.get('q') as '';

  const [showPanel, setShowPanel] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchRequest(searchQuery));
  }, [searchQuery]);

  const search = useSelector((state: TState) => state.search);

  const viewPanelDataLoading = useSelector(
    (state: TState) => state.viewPanelData.loading,
  );

  useEffect(() => {
    const quickViewPanel = document.querySelector('.quick-view-panel');

    if (quickViewPanel) {
      quickViewPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [viewPanelDataLoading]);

  if (search.loading) {
    return <Spinner />;
  }

  if (search.error) {
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
              searchResult={search.searchResult}
              setShowPanel={setShowPanel}
            />
          </div>
          {showPanel && <QuickViewPanel />}
        </div>
      </div>
    </div>
  );
};
