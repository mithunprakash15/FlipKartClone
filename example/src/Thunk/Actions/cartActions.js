// import axios from "axios";


// export const CART_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
// export const CART_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'; 
// export const CART_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

// export const cartProductsRequest = () => ({
//   type: CART_PRODUCTS_REQUEST,
// });

// export const cartProductsSuccess = (product) => ({
//   type: CART_PRODUCTS_SUCCESS, 
//   payload: product,
// });

// export const cartProductsFailure = (error) => ({
//   type: CART_PRODUCTS_FAILURE,
//   payload: error,
// });

// export const cartProducts = ({ username, cart }) => {
//     return async (dispatch) => {
//       dispatch(cartProductsRequest());
//       try {
//         const response = axios.post('/api/cart', { username, cart }).then((response) => {
            
//         }).catch((error) => {
            
//             console.error(error);
//         });
      
//       } catch (error) {
//         dispatch(cartProductsFailure(error.message));
//       }
//     };
//   };