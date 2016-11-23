import * as types from '../actions/actionTypes';
import initialState from './initialState';

const routesReducer = (state = initialState.routesPage, action) => {
  var routesPage = Object.assign({}, state);
  let routes = routesPage.routes.slice();

  switch (action.type) {
    case types.LOAD_ROUTES_SUCCESS:
      routesPage.routes = action.response      
      return routesPage;
    case types.CREATE_ROUTE_SUCCESS:
      routes.push(action.response);
      routesPage.routes = routes;    
      return routesPage;
    case types.REMOVE_ROUTE_SUCCESS:
      routesPage.routes = routes.filter(function(item) {
        return item.id != action.response.id
      });    
      return routesPage;
    case types.LOAD_ROUTE_MODE_SUCCESS:
      routesPage.manualMode = action.response.value == 0
      return routesPage;
    default:
      return state;
  }
};

export default routesReducer;
