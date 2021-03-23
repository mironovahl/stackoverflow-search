import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { SearchPage } from 'src/pages/search';
import { SearchResultPage } from 'src/pages/search-result';
import { QuestionPage } from './pages/question';

const Routes = (): ReactElement => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={SearchPage} exact />
      <Route path="/search" component={SearchResultPage} />
      <Route path="/question/:id" component={QuestionPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
