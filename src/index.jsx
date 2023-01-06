import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { rootReducer } from './services/reducers/index';
import { BrowserRouter } from 'react-router-dom';
import {
  WS_CONNECTION_OPEN,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSE,
  WS_CONNECTION_DISCONNECT,
  WS_GET_MESSAGE,
  WS_SEND_MESSAGE
} from './services/actions/webSocket';
import { socketMiddleware } from './services/middleware/webSocketMiddleware';
import { WS_URL } from './utils/constants';


const wsActions = {
  wsInit: WS_CONNECTION_OPEN,
  wsOnOpen: WS_CONNECTION_SUCCESS,
  wsOnError: WS_CONNECTION_ERROR,
  wsOnClose: WS_CONNECTION_CLOSE,
  wsDisconnect: WS_CONNECTION_DISCONNECT,
  wsOnMessage: WS_GET_MESSAGE,
  wsSendMessage: WS_SEND_MESSAGE
}

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && process.env.NODE_ENV !== 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware(WS_URL, wsActions)));

const store = createStore(rootReducer, enhancer);


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
  , document.getElementById('root'));
