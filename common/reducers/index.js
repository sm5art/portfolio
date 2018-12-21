import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import timelineReducer from './timeline';


const rootReducer = combineReducers({
    routing: routerReducer,
    timeline: timelineReducer,
});

export default rootReducer;