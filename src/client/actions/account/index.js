import * as Action from '../../action-type/account';

const find = () => (
    { type: Action.find }
);

const persist = (object) => (
    { type: Action.persist }
);

export { find, persist }
