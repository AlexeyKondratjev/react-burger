import { GET_ORDER_DATA } from '../actions/orderData';

const initialState = {
    name: "",
    order: {
      number: null,
    },
    success: false
};



export const orderDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER_DATA: {
      return action.payload;
    }
    default: {
      return state;
    }
  };
};
