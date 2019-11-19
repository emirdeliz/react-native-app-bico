import { call, all } from 'redux-saga/effects';
import professional from './professional';
import account from './account';

export { professional, account };

const root = function* root() {
  yield all([call(professional), call(account)]);
}

export default root;
