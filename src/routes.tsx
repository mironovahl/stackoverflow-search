import React, { ReactElement } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { SearchPage } from 'src/pages/search';
import { SearchResultPage } from 'src/pages/search-result';

const Routes = (): ReactElement => (
  <HashRouter>
    <Switch>
      <Route path="/" component={SearchPage} exact />
      <Route path="/search" component={SearchResultPage} />
    </Switch>
  </HashRouter>
);

export default Routes;
