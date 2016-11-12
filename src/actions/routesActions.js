import * as types from './actionTypes';
import delRouteApi from '../api/deliveryRoutesApi';

export const loadDeliveryRoutesSuccess = (response) => {
  return {
    type: types.LOAD_ROUTES_SUCCESS,
    response
  };
};

export const loadDeliveryRoutes = () => {
  return (dispatch) => {
    const routes = [
      {
        id: "123",
        deliveryman: "DMJP"
      },
      {
        id: "456",
        deliveryman: "DMFEDE"
      },
      {
        id: "789",
        deliveryman: "DMMONA"
      }
    ]
    dispatch(loadDeliveryRoutesSuccess(routes));
  }
};

export const loadRouteModeSuccess = (response) => {
  return {
    type: types.LOAD_ROUTE_MODE_SUCCESS,
    response
  };
};

export const getRouteMode = (value) => {
  return (dispatch) => {
    return delRouteApi.getRouteMode().then((param) => {
      dispatch(loadRouteModeSuccess(param));
    }).catch(err => {
      throw (err);
    });
  };
};

export const updateRouteMode = (value) => {
  return (dispatch) => {
    return delRouteApi.updateRouteMode(value).then(() => {
      console.log("Se actualizó el modo de ruteo exitosamente");
    }).catch(err => {
      throw (err);
    });
  };
};
