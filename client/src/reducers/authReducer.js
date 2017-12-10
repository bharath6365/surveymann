import {FETCH_USER} from '../actions/types';
export default (state={}, action) => {
  switch (action.type) {
    // There are three conditions. Return null if async request is going on.
    // If there is a user logged in retrun user model else return false.
    case FETCH_USER:
      return action.payload || false;
    default:
     return null;
  }

} 