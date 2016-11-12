import * as types from './actionTypes';
import delRouteApi from '../api/deliveryRoutesApi';

export const loadClientsSuccess = (response) => {
  return {
    type: types.LOAD_CLIENTS_SUCCESS,
    response
  };
};

export const loadClients = () => {
  return (dispatch) => {
    const clients = [
      {
        "id": 49,
        "name": "Andres Canabarro",
        "latitude": 0,
        "longitude": 0,
        "address": "Br. Espana 2873/302",
        "phone": "098657882",
        "deliverDay": 1,
        "emailAddress": "andrescanabarro@gmail.com",
        "creditBalance": -500
      },
      {
        "id": 50,
        "name": "Juan Pablo Mazza",
        "latitude": 0,
        "longitude": 0,
        "address": "Cadiz 2870",
        "phone": "098123456",
        "deliverDay": 2,
        "emailAddress": "jpmazza@gmail.com",
        "creditBalance": 100
      },
      {
        "id": 51,
        "name": "Alejandro Monetti",
        "latitude": 0,
        "longitude": 0,
        "address": "Dublin 2641",
        "phone": "098611000",
        "deliverDay": 4,
        "emailAddress": "alemonetti@gmail.com",
        "creditBalance": 0
      },
      {
        "id": 52,
        "name": "Federico Zaiter",
        "latitude": 0,
        "longitude": 0,
        "address": "Vicente Rocafuerte",
        "phone": "098000111",
        "deliverDay": 4,
        "emailAddress": "fzaiter@gmail.com",
        "creditBalance": 500
      }
    ];
    dispatch(loadClientsSuccess(clients));
  }
};
