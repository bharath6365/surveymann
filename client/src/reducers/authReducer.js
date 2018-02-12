import {FETCH_USER} from '../actions/types';
export default (state={}, action) => {
  // switch (action.type) {
  //   // There are three conditions. Return null if async request is going on.
  //   // If there is a user logged in retrun user model else return false.
  //   case FETCH_USER:
  //     return action.payload || false;
  //     break;
  //   default:
  //    return null;
  // }
  if (action.type.includes('fetch_user') && typeof action.payload === 'object') {
    return action.payload || false;
  } else if (action.type.includes('redux')) {
    return 'Ignore'
  } else if (action.type.includes('fetch_user') && typeof action.payload === 'string') {
    return false;
  } else {
    return null;
  }

} 