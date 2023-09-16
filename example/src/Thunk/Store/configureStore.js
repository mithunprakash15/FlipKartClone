import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../Reducers/reducer';
const middleware = applyMiddleware(thunkMiddleware);
const configureStore = () => {
    const store = createStore(rootReducer, middleware);
    return store;
  };
  
  export default configureStore;