import axios from 'axios';

const baseUrl = 'https://workout-logger-backend.onrender.com/api';

const get = async (url) => {
  const user = window.localStorage.getItem('user');
  const token = JSON.parse(user).token;
  const config = {
    headers: { Authorization: `bearer ${token}` },
  };
  const response = await axios.get(`${baseUrl}/${url}`, config);
  if (response.status > 300) {
    return;
  } else {
    return response.data;
  }
};

export { get };
