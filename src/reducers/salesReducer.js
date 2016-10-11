import * as types from '../actions/actionTypes';
import initialState from './initialState';

const salesReducer = (state = initialState.sales, action) => {

  switch (action.type) {
    case types.LOAD_SALES_SUCCESS:
      return action.response;
    default:
      return state;
  }
};

export default salesReducer;
