import { call, put, take, all } from 'redux-saga/effects';

import { AccountApi } from '../../api';
import * as actionTypeAccount from '../../action-type/account';
import * as actionTypeLoading from '../../action-type/loading';

const find = function* find() {
  try {
    const result = yield call(AccountApi.find);
    yield put({ type: actionTypeAccount.find, result });
  } catch (error) {
    console.log(`Saga error: ${error}`);
  }

  yield put({ type: actionTypeLoading.default, meta: { loading: false } });
};

const persist = function* persist(object) {
  try {
    const result = yield call(AccountApi.persist, object);
    yield put({ type: actionTypeAccount.persist, result });
  } catch (error) {
    console.log(`Saga error: ${error}`);
  }
  yield put({ type: actionTypeLoading.default, meta: { loading: false } });
};

function* watchFind() {
  while (yield take(actionTypeAccount.find)) {
    yield call(find); // waits for the fetchPosts task to terminate
  }
}

function* watchPersist() {
  while (yield take(actionTypeAccount.persist)) {
    yield call(persist); // waits for the fetchPosts task to terminate
  }
}

const root = function* root() {
  yield all([call(watchFind), call(watchPersist)]);
};

export default root;
