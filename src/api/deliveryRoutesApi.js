import api from './apiService.js';
import * as consts from '../constants/apiConstants.js';

class DeliveryRoute {
  static updateRouteMode(modeValue) {
    return api.put(`${consts.API_URL}api/Parms?id=AUTOMATIC_ROUTE&value=` + modeValue, '');
  }

  static getRouteMode() {
    return api.get(`${consts.API_URL}api/Parms?id=AUTOMATIC_ROUTE`);
  }
}

export default DeliveryRoute;
