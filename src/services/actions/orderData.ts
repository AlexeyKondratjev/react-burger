import { getOrderDataRequest } from '../../utils/api';
import {
  GET_ORDER_DATA_REQUEST,
  GET_ORDER_DATA_SUCCESS,
  GET_ORDER_DATA_FAILED
} from '../../services/actions/action-types/orderData';
import {
  TGetOrderDataRequestAction,
  TGetOrderDataSuccessAction,
  TGetOrderDataFailedAction
} from '../../services/types/actions';
import { TOrderDetails } from '../types/data';
import { AppDispatch, AppThunk } from '../types';



export const GetOrderDataRequestAction = (): TGetOrderDataRequestAction => ({
  type: GET_ORDER_DATA_REQUEST
});

export const GetOrderDataSuccessAction = (data: TOrderDetails): TGetOrderDataSuccessAction => ({
  type: GET_ORDER_DATA_SUCCESS,
  orderData: data
});

export const GetOrderDataFailedAction = (): TGetOrderDataFailedAction => ({
  type: GET_ORDER_DATA_FAILED
});




export const getOrderData: AppThunk = (ingredientsId: string[]) => (dispatch: AppDispatch) => {
    dispatch(GetOrderDataRequestAction());

    getOrderDataRequest(ingredientsId)
      .then(data =>
        dispatch(GetOrderDataSuccessAction(data)))
      .catch(err => {
        console.log(err);

        dispatch(GetOrderDataFailedAction());
      });
};
