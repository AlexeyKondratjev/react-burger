import { WS_CONNECTION_CLOSE, WS_CONNECTION_OPEN } from '../actions/action-types/webSocket';
import { AppDispatch, AppThunk, WsDispatch } from '../types';
import { TWsCloseConnectionAction, TWsInitConnectionAction } from '../types/actions';



export const WsInitConnectionAction = (payload: string): TWsInitConnectionAction => ({
  type: WS_CONNECTION_OPEN,
  payload
});

export const WsInitAuthConnectionAction = (payload: string): TWsInitConnectionAction => ({
  type: WS_CONNECTION_OPEN,
  payload
});

export const WsCloseConnectionAction = (): TWsCloseConnectionAction => ({
  type: WS_CONNECTION_CLOSE
});




export const wsInitConnection: AppThunk = () => (dispatch: WsDispatch) => {
    dispatch(WsInitConnectionAction('/all'));
};

export const wsInitAuthConnection: AppThunk = (accessToken: string | undefined) => (dispatch: WsDispatch) => {
    dispatch(WsInitAuthConnectionAction(`?token=${accessToken ? accessToken : ''}`));
};

export const wsCloseConnection: AppThunk = () => (dispatch: WsDispatch) => {
    dispatch(WsCloseConnectionAction());
};
