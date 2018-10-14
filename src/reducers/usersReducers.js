import * as types from '../actions/actionTypes';
import initialState from './initialState';

const usersReducers = (state = initialState.users, action) => {
  switch (action.type) {
    case types.USERS_LOAD_SUCCESS:
      return action.users;

    case types.USERS_LOAD_ERROR:
      return {};

    default:
      return state;
  }
};

export default usersReducers;
