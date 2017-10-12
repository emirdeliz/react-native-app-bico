import { combineReducers } from 'redux';

import loadingReducer from './loading';
import professionalReducer from './professional';
import accountReducer from './account';
import routesReducer from './routes';

export default combineReducers({
  loadingReducer,
  professionalReducer,
  accountReducer,
  routesReducer,
});
