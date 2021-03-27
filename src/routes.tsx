import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {
  SearchPage,
  SearchResultPage,
  NotFoundPage,
  QuestionPage,
} from 'src/pages';

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
