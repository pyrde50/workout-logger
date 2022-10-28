import axios from 'axios';

const baseUrl = 'https://workout-logger-backend.onrender.com/api';

const login = async (credentials) => {
  const response = await axios.post(`${baseUrl}/login`, credentials);
  return response.data;
};

const registration = async (credentials) => {
  const response = await axios.post(`${baseUrl}/users`, credentials);
  return response.data;
};

const loginService = {
  login,
  registration,
};

export default loginService;
