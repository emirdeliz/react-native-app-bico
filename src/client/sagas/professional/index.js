import { call, put, take } from 'redux-saga/effects';

import { ProfessionalApi } from '../../api';
import * as actionType from '../../action-type/professional';

export function* findAll() {
    try {
        const professional = yield call(ProfessionalApi.findAll);
        yield put({ type: actionType.findAll, professional });
    } catch (error) {
        console.log(`Saga error: ${error}`);
        yield put({ type: actionType.error, error });
    }
}

export function* watchFindAll() {
    const watch = true;

    while (watch) {
        yield take(actionType.findAll);
        yield call(findAll);
    }
}

export default function* () {
    yield [
        watchFindAll(),
    ];
}
