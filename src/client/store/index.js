import Immutable from 'immutable';
import installDevTools from 'immutable-devtools';
import remoteReduxDevtools from 'remote-redux-devtools';
import { Platform } from 'react-native';

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import {loadingMiddleware} from 'redux-loading';

import rootSaga from '../sagas';
import packageJson from '../../../package.json';
import reducer from '../reducers';
import * as actionCreators from '../actions';

const devTools = global.reduxNativeDevTools || remoteReduxDevtools;
const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, loadingMiddleware, sagaMiddleware];

let enhancer;
let updateStore = f => f;

if (__DEV__) {
    installDevTools(Immutable);
    updateStore = devTools.updateStore || updateStore;

    enhancer = compose(
        applyMiddleware(...middlewares),
        devTools({
            name: Platform.OS,
            actionCreators,
            ...packageJson.remotedev,
        })
    );
} else {
    enhancer = applyMiddleware(...middlewares);
}

const configureStore = (initialState) => {
    const store = createStore(reducer, initialState, enhancer);

    sagaMiddleware.run(rootSaga);
    updateStore(store);

    if (module.hot) {
        module.hot.accept(() => {
            store.replaceReducer(reducer.default);
        });
    }
    return store;
};

export default configureStore;
