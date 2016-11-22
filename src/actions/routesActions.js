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
    return delRouteApi.getRoutes().then((routes) => {
      dispatch(loadDeliveryRoutesSuccess(routes));
    }).catch(err => {
      throw (err);
    });
  };
};

export const createRouteSuccess = (response) => {
  return {
    type: types.LOAD_ROUTES_SUCCESS,
    response
  };
};

export const createRoute = (driverId, description, dayOfWeek, clientsId) => {
  return (dispatch) => {

    let route = {
      driver: { id: driverId },
      description: description,
      dayOfWeek: dayOfWeek,
      "clients": clientsId.map(function(clientId) {
        return { id: clientId }
      })
    }

    console.log(JSON.stringify(route));

    return delRouteApi.createNewRoute().then((route) => {
      dispatch(createRouteSuccess(route));
    }).catch(err => {
      throw (err);
    });
  }
};

export const removeRoute = (routeId) => {
  return (dispatch) => {
    return delRouteApi.removeRoute(routeId).then(() => {
      console.log("Se borró la ruta exitosamente");
    }).catch(err => {
      throw (err);
    });
  };
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
