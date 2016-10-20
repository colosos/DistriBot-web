import * as session from '../actions/sessionActions';

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
  return (current_session && current_session.access_token && current_session.role);
};

export const isManagerLogged = () => {
  let current_session = session.loadSession();
  return (isLogged() && current_session.role == 'gerente');
};

export const isSupervisorLogged = () => {
  let current_session = session.loadSession();
  return (isLogged() && current_session.role == 'supervisor');
};

export default CheckAuth;
