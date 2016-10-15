import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './userReducer';
import login from './loginReducer';
import userForm from './userFormReducer';
import sales from './salesReducer';
import products from './productsReducer';
import { reducer as notifications } from 'react-notification-system-redux';

const rootReducer = combineReducers({
  user,
  login,
  userForm,
  sales,
  products,
  notifications,
  routing: routerReducer
});

export default rootReducer;
