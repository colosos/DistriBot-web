import * as session from '../actions/sessionActions';
import moment from 'moment';

export const CheckAuth = (nextState, replace) => {
  if (!isLogged()) {
   replace({
     pathname: '/login',
     state: { nextPathname: nextState.location.pathname }
   });
  }
};

export const CheckIfUnlogged = (nextState, replace) => {
  if (isLogged()) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    });
  }
};

export const CheckIfManager = (nextState, replace) => {
  if (!isManagerLogged()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    });
  }
};

export const CheckIfSupervisor = (nextState, replace) => {
  if (!isSupervisorLogged()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    });
  }
};

export const isLogged = () => {
  let current_session = session.loadSession();
  var expired = false
  if (current_session) {
    let now = moment();
    let expires = moment(current_session['.expires'], "ddd, DD MMM YYYY HH:mm:ss z");
    let diff = moment.utc((now).diff(expires));
    expired = diff > 0;
  }
  return (current_session && current_session.access_token && current_session.role && !expired);
};

export const isManagerLogged = () => {
  let current_session = session.loadSession();
  return (isLogged() && current_session.role == 'manager');
};

export const isSupervisorLogged = () => {
  let current_session = session.loadSession();
  return (isLogged() && current_session.role == 'supervisor');
};

export default CheckAuth;
