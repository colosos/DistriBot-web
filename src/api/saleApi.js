import api from './apiService.js';
import * as consts from '../constants/apiConstants.js';

class SaleApi {
  static getSales() {
    return api.get(`${consts.API_STAGING_URL}api/Orders`);
  }
}

export default SaleApi;
