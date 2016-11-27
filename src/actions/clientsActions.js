import * as types from './actionTypes';
import delRouteApi from '../api/deliveryRoutesApi';

export const loadClientsSuccess = (response) => {
  return {
    type: types.LOAD_CLIENTS_SUCCESS,
    response
  };
};

export const loadClientsWithoutRoute = (dayOfWeek) => {
  return (dispatch) => {
    return delRouteApi.getClientsWithoutRoute(dayOfWeek).then((clients) => {
      dispatch(loadClientsSuccess(clients));
    }).catch(err => {
      throw (err);
    });
  };
};
