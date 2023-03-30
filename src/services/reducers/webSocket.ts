import {
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_DISCONNECT,
    WS_GET_MESSAGE
} from '../actions/action-types/webSocket';
import { TWsActions } from '../types/actions';
import { IOrderDataResponse } from '../types/data';



export type TWsState = {
  wsConnected: boolean,
  error: undefined | string | Event,
  orders: IOrderDataResponse[],
  total: number,
  totalToday: number
}

const initialState: TWsState = {
    wsConnected: false,
    error: undefined,
    orders: [],
    total: 0,
    totalToday: 0
}

export const wsReducer = (state = initialState, action: TWsActions): TWsState => {
    switch (action.type) {
        case WS_CONNECTION_SUCCESS: {
            console.log('REDUCER: WS connection open successfully!');

            return {
                ...state,
                wsConnected: true
            };
        }
        case WS_CONNECTION_ERROR: {
            console.log('REDUCER: An WS connection error occured!');

            return {
                ...state,
                wsConnected: false,
                error: action.payload
            };
        }
        case WS_CONNECTION_DISCONNECT: {
            console.log('REDUCER: WS connection was closed!');

            return initialState;
        }
        case WS_GET_MESSAGE: {
            console.log('REDUCER: A message was received over WS!');

            return {
                ...state,
                orders: action.payload.orders,
                total: action.payload.total,
                totalToday: action.payload.totalToday
            };
        }
        default: {
            return state;
        }
    };
};
