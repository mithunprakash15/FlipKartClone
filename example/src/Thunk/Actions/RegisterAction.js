
import axios from 'axios';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const registerRequest = () => ({
  type: REGISTER_REQUEST,
});

export const registerSuccess = (username) => ({
  type: REGISTER_SUCCESS,
  payload: username,
});

export const registerFailure = () => ({
  type: REGISTER_FAILURE,
});

export const registerUser = (username, password) => {
    return async (dispatch) => {
      dispatch(registerRequest());
  
      try {
        const response = await axios.post('/api/register', { username, password });
        const userData = response.data;
  
        if (userData.status === 'success') {
          localStorage.setItem('username', userData.username);
          dispatch(registerSuccess(userData.username));
          return true;
        } else {
          dispatch(registerFailure());
          alert(userData.error);
          return false;
        }
      } catch (error) {
        console.error('Registration error:', error);
  
        // Handle server errors here
        dispatch(registerFailure());
        return false;
      }
    };
  };
  