import { call, put, take } from 'redux-saga/effects';

import { AccountApi } from '../../api';
import * as actionType from '../../action-type/account';

export function* find() {
    try {
        const account = yield call(AccountApi.find);
        yield put({ type: actionType.find, account });
    } catch (error) {
        console.log(`Saga error: ${error}`);
        yield put({ type: actionType.error, error });
    }
}

export function* watchfind() {
    const watch = true;

    while (watch) {
        yield take(actionType.find);
        yield call(find);
    }
}

export default function* () {
    yield [
        watchfind(),
    ];
}
