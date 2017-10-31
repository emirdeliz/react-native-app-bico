import professional from './professional';
import account from './account';

export { professional, account };

const root = function* root() {
  yield [professional(), account()];
};

export default root;
