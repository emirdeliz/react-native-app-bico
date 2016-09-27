import { combineReducers } from 'redux';

import professionalReducer from './professional';
import accountReducer from './account';
import routesReducer from './routes';

export default combineReducers({
    professionalReducer,
    accountReducer,
    routesReducer
});
