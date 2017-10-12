import { call, put, take } from 'redux-saga/effects';

import { AccountApi } from '../../api';
import * as actionTypeAccount from '../../action-type/account';
import * as actionTypeLoading from '../../action-type/loading';

export function* find() {
  try {
    const result = yield call(AccountApi.find);
    yield put({ type: actionTypeAccount.find, result });
  } catch (error) {
    console.log(`Saga error: ${error}`);
  }

  yield put({ type: actionTypeLoading.default, meta: { loading: false } });
}

export function* persist(object) {
  try {
    const result = yield call(AccountApi.persist, object);
    yield put({ type: actionTypeAccount.persist, result });
  } catch (error) {
    console.log(`Saga error: ${error}`);
  }
  yield put({ type: actionTypeLoading.default, meta: { loading: false } });
}

export function* watchfind() {
  const watch = true;

  while (watch) {
    yield take(actionTypeAccount.find);
    yield call(find);
  }
}

export function* watchPersist() {
  const watch = true;

  while (watch) {
    const { account } = yield take(actionTypeAccount.persist);
    yield call(persist, account);
  }
}

export default function* () {
  yield [watchfind(), watchPersist()];
}
