import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers';
import { sagaWatcher } from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  compose(applyMiddleware(thunk, sagaMiddleware)),
);

sagaMiddleware.run(sagaWatcher);

export default store;
