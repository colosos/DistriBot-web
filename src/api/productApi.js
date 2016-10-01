import api from './apiService.js';
import * as consts from '../constants/apiConstants.js';

class ProductApi {
  static getMissingProducts() {
    return api.get(`${consts.API_STAGING_URL}/missing_products`);
  }
}

export default ProductApi;
