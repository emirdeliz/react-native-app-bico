import { List, Map } from 'immutable';

import Constants from '../../constants';

const initialState = List([
    Map({ id: 0, isDone: true, text: 'make components' }),
    Map({ id: 1, isDone: false, text: 'design actions' }),
]); // Immutable.Map({ professional: [] });

const actionsMap = {
    findAll(state) {
        fetch(`${Constants.SERVER_REST}/professional`)
            .then((response) => state.set('professional', response.json()));

        return [];
    },
};

export default (state = initialState, action) => {
    const reduceFn = actionsMap[action.type];
    if (!reduceFn) return state;
    return reduceFn(state, action);
};
