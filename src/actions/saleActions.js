import * as types from './actionTypes';
import saleApi from '../api/saleApi';

export const loadSalesSuccess = (response) => {
  return {
    type: types.LOAD_SALES_SUCCESS,
    response
  };
};

export const loadSales = () => {
  return (dispatch) => {
    return saleApi.getSales().then(sales => {
      dispatch(loadSalesSuccess(sales));
    }).catch(err => {
      throw (err);
    });
  };
};
