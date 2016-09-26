import { Map, List } from 'immutable';

const initialState = Map();

const actionsMap = {
    findAll(state, action) {
        return state.set('professional', action.professional);
    },
};

export default (state = initialState, action) => {
    const reduceFn = actionsMap[action.type];
    if (!reduceFn) return state;
    return reduceFn(state, action);
};
