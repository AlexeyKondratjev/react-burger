import {
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_DISCONNECT,
    WS_GET_MESSAGE
} from '../actions/webSocket';



const initialState = {
    wsConnected: false,
    error: undefined,
    orders: [],
    total: 0,
    totalToday: 0
}

export const wsReducer = (state = initialState, action) => {
    switch (action.type) {
        case WS_CONNECTION_SUCCESS: {
            console.log('WS connection open successfully!');

            return {
                ...state,
                wsConnected: true
            };
        }
        case WS_CONNECTION_ERROR: {
            console.log('An WS connection error occured!');

            return {
                ...state,
                wsConnected: false,
                error: action.payload
            };
        }
        case WS_CONNECTION_DISCONNECT: {
            console.log('WS connection was closed!');

            return initialState;
        }
        case WS_GET_MESSAGE: {
            console.log('A message was received over WS!');

            const { orders, total, totalToday } = action.payload;

            return {
                ...state,
                orders: orders, /*???? [...action.payload.orders] */
                total: total,
                totalToday: totalToday
            };
        }
        default: {
            return state;
        }
    };
};