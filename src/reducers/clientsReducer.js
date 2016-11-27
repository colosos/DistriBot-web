import * as types from '../actions/actionTypes';
import initialState from './initialState';

const clientsReducer = (state = initialState.clients, action) => {
  switch (action.type) {
    case types.LOAD_CLIENTS_SUCCESS:
      return action.response;
    default:
      return state;
  }
};

export default clientsReducer;
