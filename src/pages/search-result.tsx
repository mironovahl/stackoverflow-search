import React, { useEffect, useState } from 'react';
import { ResultList } from 'src/ui/result-list';
import { useQuery } from 'src/utils';
import { useDispatch, useSelector } from 'react-redux';
import { TReducer } from 'src/types';
import { resultRequest } from 'src/redux/actions';

export const SearchResultPage = () => {
  const query = useQuery();
  const searchQuery = query.get('q') as '';

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resultRequest(searchQuery));
  }, [searchQuery]);

  const searchResult = useSelector((state: TReducer) => state.searchResult);
  const loading = useSelector((state: TReducer) => state.resultLoading);

  const [showPanel, setShowPanel] = useState(false);

  if (loading) {
    return <p> Loading...</p>;
  }
  return (
    <div className="wrapper">
      <div className="search-result">
        <ResultList searchResult={searchResult} setShowPanel={setShowPanel} />
      </div>
    </div>
  );
};
