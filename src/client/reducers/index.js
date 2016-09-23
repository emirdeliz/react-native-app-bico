import { combineReducers } from 'redux';
import professionalReducer from './professional';
import routesReducer from './routes';

export default combineReducers({
    professionalReducer,
    routesReducer,
});
