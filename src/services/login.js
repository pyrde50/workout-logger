import axios from 'axios';

const baseUrl = 'https://workout-logger-backend.onrender.com/api/login';

const login = async credentials => {
    const response = await axios.post(baseUrl, credentials);
    return response.data;
}

const loginService = {
    login
}

export default loginService;