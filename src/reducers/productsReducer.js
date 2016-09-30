import * as types from '../actions/actionTypes';
import initialState from './initialState';

const productsReducer = (state = initialState.sales, action) => {

  switch (action.type) {
    case types.LOAD_PRODUCTS_SUCCESS:
      return action.response.products;
    default:
      return state;
  }
};

export default productsReducer;
