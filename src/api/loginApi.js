import api from './apiService.js';
import * as consts from '../constants/apiConstants.js';

class Login {
  static postLogin(userLogin) {
    return api.postLogin(`${consts.API_URL}/api/login`, userLogin);
  }
}

export default Login;
