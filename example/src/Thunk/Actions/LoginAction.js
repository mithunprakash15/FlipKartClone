

import axios from 'axios';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (username) => ({
  type: LOGIN_SUCCESS,
  payload: username,
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const loginUser = (username, password) => {
    return async (dispatch) => {
      dispatch(loginRequest());
  
      try {
        const response = await axios.post('/api/login', { username, password });
        const userData = response.data;
  
        if (userData.status === 'success') {
          localStorage.setItem('username', userData.username);
          dispatch(loginSuccess(userData.username));
          return true; 
        } else {
          dispatch(loginFailure());
          return false; 
        }
      } catch (error) {
        dispatch(loginFailure());
        return false; 
      }
    };
  };
  
