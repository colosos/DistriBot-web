import api from './apiService.js';
import * as consts from '../constants/apiConstants.js';

class SaleApi {
  static getSales() {
    return api.get(`${consts.API_STAGING_URL}/sales`);
  }
}

export default SaleApi;
