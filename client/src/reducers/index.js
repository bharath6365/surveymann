import authReducer from './authReducer';
import { combineReducers } from 'redux';
export default combineReducers({
    // Whatever key we mention inside here is what that goes inside the state.
    // By this i mean the initial state that was created when initilizing the store.
    auth: authReducer
})