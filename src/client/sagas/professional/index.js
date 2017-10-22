import { call, put, take } from 'redux-saga/effects';

import { ProfessionalApi } from '../../api';
import * as actionTypeProfessional from '../../action-type/professional';
import * as actionTypeLoading from '../../action-type/loading';

const findAll = function* findAll() {
  try {
    const result = yield call(ProfessionalApi.findAll);
    yield put({ type: actionTypeProfessional.findAll, result });
  } catch (error) {
    console.log(`Saga error: ${error}`);
  }
  yield put({ type: actionTypeLoading.default, meta: { loading: false } });
};

const watchFindAll = function* watchFindAll() {
  const watch = true;

  while (watch) {
    yield take(actionTypeProfessional.findAll);
    yield call(findAll);
  }
};

const root = function* root() {
  yield [watchFindAll()];
};

export default root;
