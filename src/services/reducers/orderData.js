import {
  GET_ORDER_DATA_REQUEST,
  GET_ORDER_DATA_SUCCESS,
  GET_ORDER_DATA_FAILED
} from '../actions/orderData';

const initialState = {
  orderData: {
    name: "",
    order: {
      number: null,
    },
    success: false
  },
  orderDataRequest: false
};



export const orderDataReducer = (state = initialState, action) => {
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
        orderData: action.payload
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
