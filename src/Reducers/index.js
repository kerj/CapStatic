import { combineReducers } from 'redux';
import mapManipReducer from './mapManipReducer';
import profileManipReducer from './profileManipRuducer';

const rootReducer = combineReducers({
    masterRideList: mapManipReducer,
    profileManip: profileManipReducer
})

export default rootReducer;