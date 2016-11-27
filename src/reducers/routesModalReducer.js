import * as types from '../actions/actionTypes';
import initialState from './initialState';

const routesModalReducer = (state = initialState.routesModal, action) => {
  var routesModal = Object.assign({}, state);

  switch (action.type) {
    case types.LOAD_DISTANCE_SUCCESS:
      routesModal.distance = action.response      
      return routesModal;
    default:
      return state;
  }
};

export default routesModalReducer;
