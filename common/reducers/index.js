import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import loginReducer from './login';


const rootReducer = combineReducers({
    routing: routerReducer,
    login: loginReducer,
});

export default rootReducer;