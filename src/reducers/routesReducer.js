import * as types from '../actions/actionTypes';
import initialState from './initialState';

const routesReducer = (state = initialState.routes, action) => {
  switch (action.type) {
    case types.LOAD_ROUTES_SUCCESS:
      return action.response;
    default:
      return state;
  }
};

export default routesReducer;
