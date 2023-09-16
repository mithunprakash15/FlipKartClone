

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../Actions/LoginAction';

const initialState = {
  username: localStorage.getItem('username') || null,
  loading: false,
  error: false,
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        username: action.payload,
        loading: false,
        error: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default LoginReducer;
