import * as types from '../actions/actionTypes';
import initialState from './initialState';

const notificationsReducer = (state = initialState.anomalies, action) => {
  switch (action.type) {
    case types.LOAD_NOTIFICATIONS_SUCCESS:
      return action.response;
    default:
      return state;
  }
};

export default notificationsReducer;
