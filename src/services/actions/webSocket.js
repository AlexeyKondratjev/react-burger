export const WS_CONNECTION_OPEN = 'WS_CONNECTION_OPEN';
export const WS_CONNECTION_SUCCESS = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSE = 'WS_CONNECTION_CLOSE';
export const WS_CONNECTION_DISCONNECT = 'WS_CONNECTION_DISCONNECT';
export const WS_GET_MESSAGE = 'WS_GET_MESSAGE';
export const WS_SEND_MESSAGE = 'WS_SEND_MESSAGE';


export const wsInitConnection = () => (dispatch) => {
    dispatch({
        type: WS_CONNECTION_OPEN,
        payload: '/all'
    });
};

export const wsInitAuthConnection = (accessToken) => (dispatch) => {
    dispatch({
        type: WS_CONNECTION_OPEN,
        payload: `?token=${accessToken}`
    });
};

export const wsCloseConnection = () => (dispatch) => {
    dispatch({
        type: WS_CONNECTION_CLOSE
    });
};