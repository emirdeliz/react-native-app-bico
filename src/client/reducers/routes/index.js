/*
import * as NavigationExperimental from 'navigation-experimental';

const { StateUtils } = NavigationExperimental;

const initialState = {
  index: 0,
  routes: [{ key: 'home' }],
};

const actionsMap = {
  push(state, action) {
    return StateUtils.push(state, { key: action.key });
  },
  back(state) {
    return state.index > 0 ? StateUtils.pop(state) : state;
  },
  pop(state) {
    return state.index > 0 ? StateUtils.pop(state) : state;
  },
};

const ModalStack = StackNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Profile: {
    path: 'people/:name',
    screen: MyProfileScreen,
  },
});
*/

const initialState = {
  index: 0,
  routes: [{ key: 'home' }],
};

export default (state = initialState) => {
  /*
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
  */
  return state;
};
