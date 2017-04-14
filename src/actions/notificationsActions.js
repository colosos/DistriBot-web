import * as types from './actionTypes';
import anomalyApi from '../api/anomalyApi';

export const loadNotificationsSuccess = (response) => {
  return {
    type: types.LOAD_NOTIFICATIONS_SUCCESS,
    response
  };
};

export const loadNotifications = () => {
  return (dispatch) => {
    return anomalyApi.getAnomalies().then((anomalies) => {
      dispatch(loadNotificationsSuccess(anomalies));
    }).catch(err => {
      throw (err);
    });
  };
};
