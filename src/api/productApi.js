import api from './apiService.js';
import * as consts from '../constants/apiConstants.js';

class ProductApi {
  static getMissingProducts() {
    return api.get(`${consts.API_URL}api/Products?desde=1&cantidad=100`);
  }
}

export default ProductApi;
