import * as Action from '../../action-type/account';

const find = () => (
    {
        type: Action.find,
        meta: { loading: true }
    }
);

const persist = (account) => (
    {
        type: Action.persist,
        account,
        meta: { loading: true }
    }
);

export { find, persist }
