import axios from 'axios';


export const getAuthToken = () => {
    return window.localStorage.getItem('auth_token');
};

export const setAuthHeader = (token) => {
    window.localStorage.setItem('auth_token', token);
};
export const setUser = (user) => {
  window.localStorage.setItem('auth_user', user);
};

axios.defaults.baseURL = 'https://sharewrap-backend-616c8f6eaf1d.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const request = (method, url, data) => {

    let headers = {};
    if (getAuthToken() !== null && getAuthToken() !== "null") {
        headers = {'Authorization': `Bearer ${getAuthToken()}`};
    }

    return axios({
        method: method,
        url: url,
        headers: headers,
        data: data});
};
