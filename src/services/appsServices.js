import { BASE_API_URL } from '../utils/constants';
import { handleResponse } from '../utils/services';

export const getApps = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const requestOptions = {
    method: 'GET',
    headers: { Authorization: user.accessToken },
  };

  return fetch(`${BASE_API_URL}/apps`, requestOptions)
    .then(handleResponse)
    .then(response => response.apps)
    .catch((error) => {
      throw new Error(error);
    });
};

export const editApp = (id, name, logo) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const requestOptions = {
    method: 'PUT',
    headers: {
      Authorization: user.accessToken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, logo }),
  };

  return fetch(`${BASE_API_URL}/apps/${id}`, requestOptions)
    .then(handleResponse)
    .then(response => response.app)
    .catch((error) => {
      throw new Error(error);
    });
};

export default {
  getApps,
  editApp,
};
