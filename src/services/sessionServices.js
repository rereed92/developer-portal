import { BASE_API_URL } from '../utils/constants';
import { handleResponse } from '../utils/services';

export const login = (email, password) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  };

  return fetch(`${BASE_API_URL}/login`, requestOptions)
    .then(handleResponse)
    .then((user) => {
      if (user.accessToken) {
        localStorage.setItem('user', JSON.stringify(user));
      }
      return user;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export const logout = () => {
  localStorage.removeItem('user');
};

export default {
  login,
  logout,
};
