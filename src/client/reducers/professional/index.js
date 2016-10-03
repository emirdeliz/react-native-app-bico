import { Map } from 'immutable';

const initialState = Map();

const actionsMap = {
    findAll(state, action) {
        if(action.result && action.result.errmsg)
            return state.set('error', action.result.errmsg);
        else
            return state.set('result', action.result);
    },
};

export default (state = initialState, action) => {
    const reduceFn = actionsMap[action.type];
    if (!reduceFn) return state;
    return reduceFn(state, action);
};
