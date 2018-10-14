import * as types from '../actions/actionTypes';
import initialState from './initialState';

const appsReducers = (state = initialState.apps, action) => {
  switch (action.type) {
    case types.APPS_LOAD_SUCCESS:
      return action.apps;

    case types.APPS_LOAD_ERROR:
      return {};

    case types.APPS_EDIT_SUCCESS:
      return [
        ...state.filter(app => app.id !== action.app.id),
        Object.assign({}, action.app),
      ];

    case types.APPS_EDIT_ERROR:
      return {};

    default:
      return state;
  }
};

export default appsReducers;
