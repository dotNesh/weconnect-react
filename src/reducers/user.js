import { REGISTER_USER, LOGIN_USER, RESET_PASSWORD, LOGOUT_USER } from '../actions/types';

let auth = JSON.parse(localStorage.getItem('token'));
const initialState = auth ? { isAuthenticated: true } : { isAuthenticated: false };

const Users = (state = initialState, action) => {
  switch (action.type) {
  case REGISTER_USER:
    return [
      state, {
        message: action.message,
      }
    ];

  case LOGIN_USER:
    return [
      state, {
        message: action.message,
      }
    ];

  case LOGOUT_USER:
    return [
      state, {
        message: action.message,
      }
    ];

  case RESET_PASSWORD:
    return [
      state, {
        message: action.message,
        isAuthenticated: false
      }
    ];

  default:
    return state;
  }
};

export default Users;
