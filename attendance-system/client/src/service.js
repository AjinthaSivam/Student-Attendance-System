import axios from 'axios';

const API_URL = "http://127.0.0.1:8000/api/token";

const login = async (username, password) => {
    const response = await axios.post(API_URL, new URLSearchParams({
        username,
        password
    }));
    if (response.data.access_token && response.data.username) {
        const userData = {
            access_token: response.data.access_token,
            username: response.data.username
        };
        localStorage.setItem("user", JSON.stringify(userData));
    }
    return response.data;
};

const logout = () => {
    localStorage.removeItem("user");
};

const getUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

export default {
    login,
    logout,
    getUser,
};
