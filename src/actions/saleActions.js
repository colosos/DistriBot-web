import * as types from './actionTypes';
import saleApi from '../api/saleApi';

export const loadSalesSuccess = (response) => {
  return {
    type: types.LOAD_SALES_SUCCESS,
    response
  };
};

export const loadSaleSuccess = (response) => {
  return {
    type: types.LOAD_SALE_SUCCESS,
    response
  };
};

export const loadPreSales = () => {
  return (dispatch) => {
    return saleApi.getPreSales().then(sales => {
      dispatch(loadSalesSuccess(sales));
    }).catch(err => {
      throw (err);
    });
  };
};

export const loadSale = (id) => {
  return (dispatch) => {
    return saleApi.getSale(id).then(sale => {
      dispatch(loadSaleSuccess(sale));
    }).catch(err => {
      throw (err);
    });
  };
};
