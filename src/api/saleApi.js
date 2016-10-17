import api from './apiService.js';
import * as consts from '../constants/apiConstants.js';

class SaleApi {
  static getPreSales() {
    return api.get(`${consts.API_URL}api/missingOrders`);
  }

  static getSale(id) {
  	return api.get(`${consts.API_URL}api/Orders/` + id);
  }
}

export default SaleApi;
