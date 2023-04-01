import {
  GET_ORDER_DATA_REQUEST,
  GET_ORDER_DATA_SUCCESS,
  GET_ORDER_DATA_FAILED
} from '../actions/action-types/orderData';
import { TGetOrderDataActions } from '../types/actions';
import { TOrderDetails } from '../types/data';



export type TOrderDetailsState = {
  orderData: TOrderDetails,
  orderDataRequest: boolean
}

const initialState: TOrderDetailsState = {
  orderData: {
    name: "",
    order: {
      number: null,
    },
    success: false
  },
  orderDataRequest: false
};



export const orderDataReducer = (state = initialState, action: TGetOrderDataActions): TOrderDetailsState => {
  switch (action.type) {
    case GET_ORDER_DATA_REQUEST: {
      return {
        ...state,
        orderDataRequest: true
      };
    }
    case GET_ORDER_DATA_SUCCESS: {
      return {
        ...state,
        orderDataRequest: false,
        orderData: action.orderData
      };
    }
    case GET_ORDER_DATA_FAILED: {
      return initialState;
    }
    default: {
      return state;
    }
  };
};
