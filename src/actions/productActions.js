import * as types from './actionTypes';
import productApi from '../api/productApi';

export const loadProductsSuccess = (response) => {
  return {
    type: types.LOAD_PRODUCTS_SUCCESS,
    response
  };
};

export const loadMissingProducts = (date) => {
  return (dispatch) => {
    return productApi.getMissingProducts(date).then(products => {
      dispatch(loadProductsSuccess(products));
    }).catch(err => {
      throw (err);
    });
  };
};
