import * as types from '../actions/actionTypes';
import initialState from './initialState';

const deliveryMenReducer = (state = initialState.deliveryMen, action) => {
  switch (action.type) {
    case types.LOAD_DELIVERY_MEN_SUCCESS:
      return action.response;
    default:
      return state;
  }
};

export default deliveryMenReducer;
