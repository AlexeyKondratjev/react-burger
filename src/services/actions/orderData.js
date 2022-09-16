import { getOrderDataRequest } from '../../utils/api';
export const GET_ORDER_DATA = 'GET_ORDER_DATA';



export function getOrderData(ingredientsId) {
  return function (dispatch) {
    getOrderDataRequest(ingredientsId)
      .then(data =>
        dispatch({
          type: GET_ORDER_DATA,
          payload: data
        }))
      .catch(err => console.log(err));
  }
};
