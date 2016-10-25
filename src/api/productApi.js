import api from './apiService.js';
import * as consts from '../constants/apiConstants.js';

class ProductApi {
  static getMissingProducts(date) {
    return api.get(`${consts.API_URL}api/neededProducts?date=`+date);
  }
}

export default ProductApi;
