import axios from "axios";


export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'; 
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (product) => ({
  type: FETCH_PRODUCTS_SUCCESS, // Corrected
  payload: product,
});

export const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});

export const fetchProducts = () => {
    return async (dispatch) => {
      dispatch(fetchProductsRequest());
      try {
        const response = await axios.get('/api/products');
        const products = response.data;
        dispatch(fetchProductsSuccess(products));
      } catch (error) {
        dispatch(fetchProductsFailure(error.message));
      }
    };
  };