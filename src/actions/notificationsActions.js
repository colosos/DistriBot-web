import * as types from './actionTypes';
import saleApi from '../api/saleApi';

export const loadNotificationsSuccess = (response) => {
  return {
    type: types.LOAD_NOTIFICATIONS_SUCCESS,
    response
  };
};

export const loadNotifications = () => {
  return (dispatch) => {
    const notifications = [{
      id: 1,
      isPositive: true,
      diff: 10000,
      start_date: '12/03/2017',
      end_date: '19/03/2017'
    }, {
      id: 2,
      isPositive: false,
      diff: 87653,
      start_date: '05/02/2017',
      end_date: '12/02/2017'
    }, {
      id: 3,
      isPositive: false,
      diff: 99982,
      start_date: '08/01/2017',
      end_date: '15/01/2017'
    }];
    
    dispatch(loadNotificationsSuccess(notifications));
  };
};
