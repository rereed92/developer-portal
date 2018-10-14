import * as types from './actionTypes';
import * as appsServices from '../services/appsServices';

export function loadAppsSuccess(apps) {
  return {
    type: types.APPS_LOAD_SUCCESS,
    apps,
  };
}

export function loadAppsError(error) {
  return {
    type: types.APPS_LOAD_ERROR,
    error,
  };
}

export function loadApps() {
  return dispatch => (
    appsServices.getApps()
      .then((apps) => {
        dispatch(loadAppsSuccess(apps));
      }).catch((error) => {
        dispatch(loadAppsError(error));
      })
  );
}

export function editAppsSuccess(app) {
  return {
    type: types.APPS_EDIT_SUCCESS,
    app,
  };
}

export function editAppsError(error) {
  return {
    type: types.APPS_EDIT_ERROR,
    error,
  };
}

export function editApp(id, data) {
  return dispatch => (
    appsServices.editApp(id, data.name, data.logo)
      .then((app) => {
        dispatch(editAppsSuccess(app));
      }).catch((error) => {
        dispatch(editAppsError(error));
      })
  );
}
