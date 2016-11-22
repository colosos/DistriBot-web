import * as types from '../actions/actionTypes';
import initialState from './initialState';

const routesReducer = (state = initialState.routesPage, action) => {
  let routesPage = Object.assign({}, state);

  switch (action.type) {
    case types.LOAD_ROUTES_SUCCESS:
      routesPage.routes = action.response      
      return routesPage;
    case types.LOAD_ROUTE_MODE_SUCCESS:
      routesPage.manualMode = action.response.value == 0
      return routesPage;
    default:
      return state;
  }
};

export default routesReducer;
