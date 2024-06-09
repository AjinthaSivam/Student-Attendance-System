import axios from 'axios';

const API_URL = "http://127.0.0.1:8000/api/token";

const login = async (username, password) => {
    const response = await axios.post(API_URL, new URLSearchParams({
        username,
        password
    }));
    if (response.data.access_token) {
        localStorage.setItem("user", JSON.stringify(response.data));
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
