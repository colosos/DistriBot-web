import api from './apiService.js';
import * as consts from '../constants/apiConstants.js';

class DeliveryRoute {
  static updateRouteMode(modeValue) {
    return api.put(`${consts.API_URL}api/Parms?id=AUTOMATIC_ROUTE&value=` + modeValue, '');
  }

  static getRouteMode() {
    return api.get(`${consts.API_URL}api/Parms?id=AUTOMATIC_ROUTE`);
  }

  static getRoutes() {
    return api.get(`${consts.API_URL}api/Routes`);
  }

  static createNewRoute(newRoute) {
  	return api.post(`${consts.API_URL}api/Routes`, newRoute);
  }

  static removeRoute(routeId) {
    return api.delete(`${consts.API_URL}api/Routes/` + routeId, '');
  }

  static getDeliveryMen() {
    return api.get(`${consts.API_URL}api/DeliveryMen`);
  }

  static getClientsWithoutRoute(dayOfWeek) {
    return api.get(`${consts.API_URL}api/ClientsWithoutRoute?dw=` + dayOfWeek);
  }

  static getDistance(clientsId) {
    return api.post(`${consts.API_URL}api/EvaluateRoute`, clientsId);
  }
}

export default DeliveryRoute;
