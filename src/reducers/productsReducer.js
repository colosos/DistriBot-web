import * as types from '../actions/actionTypes';
import initialState from './initialState';

const productsReducer = (state = initialState.products, action) => {
  switch (action.type) {
    case types.LOAD_PRODUCTS_SUCCESS:
      return action.response;
    default:
      return state;
  }
};

export default productsReducer;
