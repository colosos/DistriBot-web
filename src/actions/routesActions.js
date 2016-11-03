import * as types from './actionTypes';

export const loadDeliveryRoutesSuccess = (response) => {
  return {
    type: types.LOAD_ROUTES_SUCCESS,
    response
  };
};

export const loadDeliveryRoutes = () => {
  return (dispatch) => {
    const routes = [
      {
        id: "123",
        deliveryman: "DMJP"
      },
      {
        id: "456",
        deliveryman: "DMFEDE"
      },
      {
        id: "789",
        deliveryman: "DMMONA"
      }
    ]
    dispatch(loadDeliveryRoutesSuccess(routes));
  }
};
