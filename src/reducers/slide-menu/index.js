import { Dimensions } from 'react-native'
import Immutable from 'immutable';

const initialState = Immutable.Map({ isOpen: false, left: 0 });
const screenWidth = Dimensions.get('window').width

const actionsMap = {
    openMenu(state, action) {
        return state.update('left', left => left > 0? 0 : screenWidth -50);
    },

    moveSlide(state, action) {
        return state.update('left', left => action.left);
    }
};

export default (state = initialState, action) => {
    const reduceFn = actionsMap[action.type];
    if (!reduceFn) return state
    return reduceFn(state, action)
}
