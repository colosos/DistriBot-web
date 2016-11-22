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

  static getDeliveryMen() {
  	return api.get(`${consts.API_URL}api/DeliveryMen`);
  }

  static createNewRoute(newRoute) {
  	return api.post(`${consts.API_URL}api/Routes`, newRoute);
  }

  static removeRoute(routeId) {
    return api.delete(`${consts.API_URL}api/Routes/` + routeId, '');
  }
}

export default DeliveryRoute;
