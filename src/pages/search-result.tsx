import React, { useEffect, useState } from 'react';
import { ResultList } from 'src/ui/result-list';
import { useQuery } from 'src/utils';
import { useDispatch, useSelector } from 'react-redux';
import { TReducer } from 'src/types';

export const SearchResultPage = () => {
  const searchResult = useSelector((state: TReducer) => state.searchResult);
  const loading = useSelector((state: TReducer) => state.resultLoading);

  const [showPanel, setShowPanel] = useState(false);

  if (loading) {
    return <p> Loading...</p>;
  }
  console.log(loading);
  return (
    <div className="wrapper">
      <div className="search-result">
        <ResultList searchResult={searchResult} setShowPanel={setShowPanel} />
      </div>
    </div>
  );
};
