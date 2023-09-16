import { CART_PRODUCTS_REQUEST,CART_PRODUCTS_SUCCESS,CART_PRODUCTS_FAILURE } from "../Actions/cartActions";
const initalState ={
    product : null,
    loading : false,
    error : null,
}
const cartReducer = (state = initalState,action)=>{
    switch(action.type){
        case CART_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
      case CART_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: null,
      };
      case CART_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      default:
      return state;
    }
}
export default cartReducer;