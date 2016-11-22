import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './userReducer';
import login from './loginReducer';
import userForm from './userFormReducer';
import sales from './salesReducer';
import sale from './saleReducer';
import products from './productsReducer';
import routes from './routesReducer';
import deliveryMen from './deliveryMenReducer';
import clients from './clientsReducer';
import { reducer as notifications } from 'react-notification-system-redux';

const rootReducer = combineReducers({
  user,
  login,
  userForm,
  sales,
  sale,
  products,
  notifications,
  routesPage: routes,
  deliveryMen,
  clients,
  routing: routerReducer
});

export default rootReducer;
