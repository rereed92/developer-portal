import * as sessionServices from '../services/sessionServices';

export const handleResponse = response => (
  response.text()
    .then((text) => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
        if (response.status === 401) {
          sessionServices.logout();
          location.reload(true); // eslint-disable-line
        }

        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }

      return data;
    })
    .catch((error) => {
      throw new Error(error);
    })
);

export default {
  handleResponse,
};
