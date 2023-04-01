import { compose, applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/index';
import {
  WS_CONNECTION_OPEN,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSE,
  WS_CONNECTION_DISCONNECT,
  WS_GET_MESSAGE/* ,
  WS_SEND_MESSAGE */
} from './actions/action-types/webSocket';
import { socketMiddleware } from './middleware/webSocketMiddleware';
import { WS_URL } from '../utils/constants';
import { TWsActions, TWsInitConnectionAction } from './types/actions';
import { wsInitConnection, WsInitConnectionAction } from './actions/webSocket';



const wsActions = {
  wsInit: WS_CONNECTION_OPEN,
  wsOnOpen: WS_CONNECTION_SUCCESS,
  wsOnError: WS_CONNECTION_ERROR,
  wsOnClose: WS_CONNECTION_CLOSE,
  wsDisconnect: WS_CONNECTION_DISCONNECT,
  wsOnMessage: WS_GET_MESSAGE/* ,
  wsSendMessage: WS_SEND_MESSAGE */
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware(WS_URL, wsActions)));

export const store = createStore(rootReducer, enhancer);
