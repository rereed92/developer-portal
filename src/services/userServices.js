import { BASE_API_URL } from '../utils/constants';
import { handleResponse } from '../utils/services';

export const getUsers = (id, offset) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const requestOptions = {
    method: 'GET',
    headers: { Authorization: user.accessToken },
  };

  return fetch(`${BASE_API_URL}/apps/${id}/users?limit=25&offset=${offset}`, requestOptions)
    .then(handleResponse)
    .then(response => response.users)
    .catch((error) => {
      throw new Error(error);
    });
};

export default {
  getUsers,
};
