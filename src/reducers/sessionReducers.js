import * as types from '../actions/actionTypes';
import initialState from './initialState';

const sessionReducers = (state = initialState.user, action) => {
  switch (action.type) {
    case types.LOG_IN_SUCCESS:
      return action.user;

    case types.LOG_IN_ERROR:
      return action.error;

    default:
      return state;
  }
};

export default sessionReducers;
