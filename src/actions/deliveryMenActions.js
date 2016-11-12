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
    const deliveryMen = [
      {
        "id": 26,
        "name": "Juan Carlos",
        "userName": "rjc",
        "password": null,
        "confirmPassword": null
      },
      {
        "id": 27,
        "name": "Juan Manuel",
        "userName": "rjm",
        "password": null,
        "confirmPassword": null
      },
      {
        "id": 28,
        "name": "Alejandro",
        "userName": "rale",
        "password": null,
        "confirmPassword": null
      },
      {
        "id": 29,
        "name": "Juan Carlos",
        "userName": "rjc",
        "password": null,
        "confirmPassword": null
      }
    ];
    dispatch(loadDeliveryMenSuccess(deliveryMen));
  }
};
