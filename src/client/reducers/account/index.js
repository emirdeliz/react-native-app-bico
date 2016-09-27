import { Map } from 'immutable';

const initialState = Map();

const actionsMap = {
    find(state, action) {
        return state.set('account', action.account);
    },
};

export default (state = initialState, action) => {
    const reduceFn = actionsMap[action.type];
    if (!reduceFn) return state;
    return reduceFn(state, action);
};
