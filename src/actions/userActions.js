import * as types from './actionTypes';
import * as userServices from '../services/userServices';

export function loadUsersSuccess(users) {
  return {
    type: types.USERS_LOAD_SUCCESS,
    users,
  };
}

export function loadUsersError(error) {
  return {
    type: types.USERS_LOAD_ERROR,
    error,
  };
}

export function loadUsers(id, offset) {
  return dispatch => (
    userServices.getUsers(id, offset)
      .then((users) => {
        dispatch(loadUsersSuccess(users));
      }).catch((error) => {
        dispatch(loadUsersError(error));
      })
  );
}
