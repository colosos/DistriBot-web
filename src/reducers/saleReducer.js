import * as types from '../actions/actionTypes';
import initialState from './initialState';

const saleReducer = (state = initialState.sale, action) => {

  switch (action.type) {
    case types.LOAD_SALE_SUCCESS:
      return action.response;
    default:
      return state;
  }
};

export default saleReducer;
