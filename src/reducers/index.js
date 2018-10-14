
import { combineReducers } from 'redux';

import sessionReducers from './sessionReducers';
import appsReducers from './appsReducers';
import usersReducers from './usersReducers';

const reducers = combineReducers({
  sessionReducers,
  appsReducers,
  usersReducers,
});

export default reducers;
