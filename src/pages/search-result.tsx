import React, { useEffect, useState } from 'react';
import { useQuery } from 'src/utils';
import { useDispatch, useSelector } from 'react-redux';
import { TReducer } from 'src/types';
import { QuickViewPanel } from 'src/ui/quick-view-panel';
import { searchRequest } from 'src/store/search';
import { Spinner } from 'src/ui/spinner';
import { ResultContent } from 'src/ui/result-content';

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
        <p className="result_title">Search result for "{searchQuery}"</p>
        <div className="result_content">
          <ResultContent
            searchResult={searchResult}
            setShowPanel={setShowPanel}
          />
          {showPanel && <QuickViewPanel />}
        </div>
      </div>
    </div>
  );
};
