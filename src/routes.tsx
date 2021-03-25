import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { SearchPage } from 'src/pages/search';
import { SearchResultPage } from 'src/pages/search-result';
import { NotFoundPage } from 'src/pages/not-found';
import { QuestionPage } from 'src/pages/question';

const Routes = (): ReactElement => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={SearchPage} exact />
      <Route path="/search" component={SearchResultPage} />
      <Route path="/question/:id" component={QuestionPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
