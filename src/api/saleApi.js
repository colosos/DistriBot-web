import api from './apiService.js';
import * as consts from '../constants/apiConstants.js';

class SaleApi {
  static getSales() {
    return api.get(`${consts.API_URL}api/Orders?desde=1&cantidad=100`);
  }
}

export default SaleApi;
