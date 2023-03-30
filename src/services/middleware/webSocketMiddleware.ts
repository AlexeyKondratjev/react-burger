import { getCookie } from "../../utils/cookie";
import { getUserData } from "../actions/auth";
import { wsInitAuthConnection } from "../actions/webSocket";
import { Middleware, MiddlewareAPI } from "redux";
import { TWsActions, TWs_Actions } from "../types/actions";
import { AppDispatch, RootState, TWebSocket } from "../types";



export const socketMiddleware = (wsUrl: string, wsActions: TWs_Actions): Middleware => {
  return (store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: TWebSocket = null;
    let isConnected = false;
    let reconnectTimer = 0;

    return (next: (action: TWsActions) => {}) => (action: TWsActions) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { wsInit, wsOnOpen, wsOnError, wsOnClose, wsDisconnect, wsOnMessage /*, wsSendMessage */ } = wsActions;

      if (type === wsInit) {
        console.log('WS connection open initiated!');
        socket = new WebSocket(`${wsUrl}${payload}`);
        isConnected = true;
      } else if (type === wsOnClose && socket) {
        console.log('WS connection close initiated!');
        isConnected = false;
        clearTimeout(reconnectTimer);
        reconnectTimer = 0;

        socket.close(1000, 'WS is closed.');
      }

      if (socket) {
        socket.onopen = () => {
          dispatch({ type: wsOnOpen });
        }
        socket.onerror = event => {
          console.log('WS onError.', event);
          /* dispatch({ type: wsOnError, payload: event }); */ //---?
        }
        socket.onmessage = event => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;

          dispatch({ type: wsOnMessage, payload: restParsedData });
        }
        socket.onclose = (event: CloseEvent) => {
          if (event.code !== 1000) {
            console.log('WS onClose.', event);
            dispatch({ type: wsOnError, payload: event.code.toString() });
          };

          dispatch({ type: wsDisconnect });

          if (isConnected) {
            dispatch(getUserData());

            reconnectTimer = window.setTimeout(() => {
              console.log('Try to reconnect WS...');
              dispatch(wsInitAuthConnection(getCookie('token')));
            }, 3000);
          }
        }
/*         if (type === wsSendMessage) {
          const orders = { ...payload };

          socket.send(JSON.stringify(orders));
        } */
      }

      next(action);
    };
  };
};
