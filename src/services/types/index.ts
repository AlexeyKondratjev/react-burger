import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Action, ActionCreator, AnyAction, Dispatch } from 'redux';
import { store } from '../store';
import {
  TConstructorIngredientsActions,
  TGetOrderDataActions,
  TModalActions,
  TGetAllIngredientsActions,
  TAuthActions,
  TWsActions
} from './actions';
import { rootReducer } from '../reducers';


// Тип, описывающий хранилище.
export type RootState = ReturnType<typeof store.getState>; //typeof rootReducer ??

// Типизация всех экшенов приложения.
export type TApplicationActions = TConstructorIngredientsActions | TGetOrderDataActions | TModalActions |
                                  TGetAllIngredientsActions | TAuthActions | TWsActions;
// Типизация thunk в нашем приложении.
export type AppThunk<ReturnType = void> = ActionCreator<ThunkAction<ReturnType, RootState, Action, TApplicationActions>>;

// Типизация метода dispatch для проверки на валидность отправляемого экшена.
export type AppDispatch = ThunkDispatch<RootState, AnyAction, TApplicationActions>;
export type WsDispatch = Dispatch<TWsActions>;


export type TWebSocket = WebSocket | null;



