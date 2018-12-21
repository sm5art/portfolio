import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import timelineReducer from './timeline';
import drawerReducer from './drawer';


const rootReducer = combineReducers({
    routing: routerReducer,
    timeline: timelineReducer,
    drawer: drawerReducer
});

export default rootReducer;