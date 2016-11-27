import * as types from './actionTypes';
import delRouteApi from '../api/deliveryRoutesApi';

export const loadDeliveryMenSuccess = (response) => {
  return {
    type: types.LOAD_DELIVERY_MEN_SUCCESS,
    response
  };
};

export const loadDeliveryMen = () => {
  return (dispatch) => {
    return delRouteApi.getDeliveryMen().then((deliveryMen) => {
      dispatch(loadDeliveryMenSuccess(deliveryMen));
    }).catch(err => {
      throw (err);
    });
  };
};
