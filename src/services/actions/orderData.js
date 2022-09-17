import { getOrderDataRequest } from '../../utils/api';

export const GET_ORDER_DATA_REQUEST = 'GET_ORDER_DATA_REQUEST';
export const GET_ORDER_DATA_SUCCESS = 'GET_ORDER_DATA_SUCCESS';
export const GET_ORDER_DATA_FAILED = 'GET_ORDER_DATA_FAILED';


export function getOrderData(ingredientsId) {
  return function (dispatch) {
    dispatch({ type: GET_ORDER_DATA_REQUEST });

    getOrderDataRequest(ingredientsId)
      .then(data =>
        dispatch({
          type: GET_ORDER_DATA_SUCCESS,
          payload: data
        }))
      .catch(err => {
        console.log(err);
        dispatch({ type: GET_ORDER_DATA_FAILED });
      });
  }
};
