const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: user || {},
  apps: [],
  users: [],
};

export default initialState;
