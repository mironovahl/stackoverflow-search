import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { SearchPage } from 'src/search/search.page';
import { SearchResultPage } from 'src/search-result/search-result.page';
import { NotFoundPage } from 'src/pages/not-found.page';
import { QuestionPage } from 'src/question/question.page';

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
