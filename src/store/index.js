import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from'./modules/rootReducer';
import rootSaga from'./modules/rootSaga';

const sagaMonitor = process.NODE_ENV === 'development'
? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({
  sagaMonitor,
});

const enhacer =
  process.env.NODE_ENV === 'development' ? compose(
    console.tron.createEnhancer(),
    applyMiddleware(sagaMiddleware)
    ) : applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, enhacer);

sagaMiddleware.run(rootSaga);

export default store;