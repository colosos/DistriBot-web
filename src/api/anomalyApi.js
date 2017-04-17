import api from './apiService.js';
import * as consts from '../constants/apiConstants.js';

class AnomalyApi {
  static getAnomalies() {
    return api.get(`${consts.API_URL}api/loadAnomalies`);
  }
}

export default AnomalyApi;
