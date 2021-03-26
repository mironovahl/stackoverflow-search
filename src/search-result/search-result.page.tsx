import React, { useEffect, useState } from 'react';
import { useQuery } from 'src/utils';
import { useDispatch, useSelector } from 'react-redux';

import { TReducer } from 'src/types';
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
    (state: TReducer) => state.search.searchResult,
  );
  const loading = useSelector((state: TReducer) => state.search.loading);
  const error = useSelector((state: TReducer) => state.search.error);

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
