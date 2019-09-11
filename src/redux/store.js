import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
//using redux thunk to handle asynchronous actions
// import thunk from 'redux-thunk';
import logger from 'redux-logger';
//using redux saga to handle asynchronous actions
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
};

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default {store, persistor};