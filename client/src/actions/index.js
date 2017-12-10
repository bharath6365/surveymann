import axios from 'axios';
import {FETCH_USER} from './types'
export const fetchUser = () => {
    // This is an async request. We want our action creator to return payload only when
    // we retreive data from the backend. We use redux thunk. If we return a function insteadx
    // of a object reduxthunk automatically watches it.
    return async function(dispatch) {
     const res = await axios.get('/api/current_user');
     dispatch({type: FETCH_USER, payload: res.data});
    }
    
}

export const handleToken = (token) => {
    return async function(dispatch) {
        const res = await axios.post('/api/stripe', token);
        // We dispatch the same action type because FETCH_USER returns user model
        dispatch({type: FETCH_USER, payload: res.data});
    }
}