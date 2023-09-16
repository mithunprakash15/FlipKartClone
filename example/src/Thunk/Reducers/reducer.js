import { combineReducers } from 'redux';
// import cartReducer from './cartReducer';
// import loginReducer from './loginReducer';
import productReducer from './ProductReducer';
import LoginReducer from './LoginReducer';
import RegisterReducer from './RegisterReducer';

// Combine all your reducers here
const rootReducer = combineReducers({
    product: productReducer,
//   cart: cartReducer,
   login: LoginReducer,
   register : RegisterReducer,
//   // Add more reducers as needed
});

export default rootReducer;