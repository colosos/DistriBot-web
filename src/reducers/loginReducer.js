import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function loginReducer(state = initialState.login, action) {
  const queryString = require('query-string');

  switch (action.type) {
      case types.LOGIN_USER_SUCCESS: {
        const userObject = queryString.parse(action.user);
        return { token: action.response['token'],
                role:  action.response['role'],
                user: userObject };
      }
      case types.LOGIN_USER_ERROR: {
        if (action.response.error)
          return { errorLogin: action.response.error };
        else if (action.response.errors)
          return { errorLogin: action.response.errors.join('<br/>') };
        return { errorLogin: 'Server Error' };
      }
      case types.LOGOUT_USER: {
        return {};
      }
      default: {
        return state;
      }
    }
}
