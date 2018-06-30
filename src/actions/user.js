import Axios from 'axios';
import { toast } from 'react-toastify';
import * as types from './types';

//axios.defaults.baseURL = 'https://weconnect02.herokuapp.com/api/v2/';

export const register = res => ({
  type: types.REGISTER_USER,
  message: res.message,
  isAuthenticated: false
});

export const login = res => ({
  type: types.LOGIN_USER,
  token: res.token,
  message: res.message
});

export const reset = res => ({
  type: types.RESET_PASSWORD,
  message: res.message
});

export const registerUser = (username, email, password) => {
  const user = {
    username: username,
    email: email,
    password: password,
  };
  return (dispatch) => Axios.post('https://weconnect02.herokuapp.com/api/v2/auth/register', user)
    .then(response => {
      dispatch(register(response.data));
      toast.success(response.data);
      window.location.assign("/login");
    })
    .catch(error => {
      console.log(error.response);
      if (error.response.data["Password-Format"]) {
        console.log(error.response.data["Password-Format"].message);
        toast.error(`Password ${error.response.data["Password-Format"].message}`);
      }
      if (error.response.data["Username-Format"]) {
        console.log(error.response.data["Username-Format"].message);
        toast.error(`Username ${error.response.data["Username-Format"].message}`);
      }
      if (error.response.data["Username-Duplication"]) {
        console.log(error.response.data["Username-Duplication"].message);
        toast.error(`${error.response.data["Username-Duplication"].message}`);
      }
      if (error.response.data["Email-Duplication"]) {
        console.log(error.response.data["Email-Duplication"].message);
        toast.error(`${error.response.data["Email-Duplication"].message}`);
      }
    });
};

export const loginUser = (username, password) => (dispatch) => Axios.post('https://weconnect02.herokuapp.com/api/v2/auth/login', { username: username, password: password })
  .then(response => {
    dispatch(login(response.data));
    const { token } = response.data;
    localStorage.setItem('token', JSON.stringify(token));
    toast.success(response.data.message);
    window.location.assign('/catalog');
  })
  .catch(error => {
    toast.error(error.response.data);
  });

export const resetPassword = (username) => (dispatch) => Axios.post('https://weconnect02.herokuapp.com/api/v2/auth/reset-password', { username: username })
  .then(response => {
    console.log(response);
    dispatch(reset(response.data));
    toast.success(response.data.message);
  })
  .catch(error => {
    toast.error(error.response.data.message);
  });
