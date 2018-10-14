import * as types from './actionTypes';
import * as sessionServices from '../services/sessionServices';

import { history } from '../utils/history';

export function loginSuccess(user) {
  return {
    type: types.LOG_IN_SUCCESS,
    user,
  };
}

export function loginError(error) {
  return {
    type: types.LOG_IN_ERROR,
    error,
  };
}

export function login(credentials, from) {
  return dispatch => (
    sessionServices.login(credentials.email, credentials.password)
      .then((user) => {
        dispatch(loginSuccess(user));
        history.push(from);
      }).catch((error) => {
        dispatch(loginError(error));
      })
  );
}
