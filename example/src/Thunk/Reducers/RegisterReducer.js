

import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from '../Actions/RegisterAction';

const initialState = {
  username: localStorage.getItem('username') || null,
  loading: false,
  error: false,
};

const RegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        username: action.payload,
        loading: false,
        error: false,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default RegisterReducer;
