import * as types from './actionTypes';
import * as session from './sessionActions';

export function logout() {
  return { type: types.LOGOUT_USER };
}

export const logoutDispatch = (history) => {
  return (dispatch) => {
    session.deleteSession();
    history.push('/login');
    dispatch(logout());
  };
};
