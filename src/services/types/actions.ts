import { GET_ALL_INGREDIENTS_FAILED, GET_ALL_INGREDIENTS_REQUEST, GET_ALL_INGREDIENTS_SUCCESS } from '../actions/action-types/allIngredients';
import {
  FORGOT_PASSWORD_FAILED,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  GET_USERDATA_FAILED,
  GET_USERDATA_REQUEST,
  GET_USERDATA_SUCCESS,
  LOGIN_USER_FAILED,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_FAILED,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  REFRESH_USERDATA_FAILED,
  REFRESH_USERDATA_REQUEST,
  REFRESH_USERDATA_SUCCESS,
  REGISTRATION_USER_FAILED,
  REGISTRATION_USER_REQUEST,
  REGISTRATION_USER_SUCCESS,
  RESET_PASSWORD_FAILED,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  UPDATE_TOKEN_FAILED,
  UPDATE_TOKEN_REQUEST,
  UPDATE_TOKEN_SUCCESS
} from '../actions/action-types/auth';
import {
  ADD_BUN_TO_CONSTRUCTOR,
  ADD_STUFFING_ELEMENT_TO_CONSTRUCTOR,
  DELETE_STUFFING_ELEMENT_FROM_CONSTRUCTOR,
  REORDER_STUFFING_ELEMENTS,
  CONSTRUCTOR_CLEANUP
} from '../actions/action-types/constructorIngredients';
import { RESET_MODAL, SET_MODAL } from '../actions/action-types/modal';
import {
  GET_ORDER_DATA_REQUEST,
  GET_ORDER_DATA_SUCCESS,
  GET_ORDER_DATA_FAILED
} from '../actions/action-types/orderData';
import { WS_CONNECTION_CLOSE, WS_CONNECTION_DISCONNECT, WS_CONNECTION_ERROR, WS_CONNECTION_OPEN, WS_CONNECTION_SUCCESS, WS_GET_MESSAGE } from '../actions/action-types/webSocket';
import { wsInitAuthConnection, WsInitAuthConnectionAction, wsInitConnection, WsInitConnectionAction } from '../actions/webSocket';
import { TIngredient, IOrderDataResponse, TModal, TOrderDetails, IAuthResponse, IRegistrationResponse, IAuthOutResponse, IPasswordForgotResetResponse, IUserDataResponce, ITokenUpdResponse } from './data';



export type TAddBunToConstructorAction = {
  readonly type: typeof ADD_BUN_TO_CONSTRUCTOR,
  readonly item: TIngredient
};

export type TAddStuffingElementToConstructorAction = {
  readonly type: typeof ADD_STUFFING_ELEMENT_TO_CONSTRUCTOR,
  readonly payload: { item: TIngredient, id: string }
};

export type TDeleteStuffingElementFromConstructorAction = {
  readonly type: typeof DELETE_STUFFING_ELEMENT_FROM_CONSTRUCTOR,
  readonly payload: { id: string }
};

export type TReorderStuffingElementsAction = {
  readonly type: typeof REORDER_STUFFING_ELEMENTS,
  readonly payload: { dragIndex: number, dropIndex: number }
};

export type TConstructorCleanUpAction = {
  readonly type: typeof CONSTRUCTOR_CLEANUP
};

///////////////////////////////////////////

export type TGetOrderDataRequestAction = {
  readonly type: typeof GET_ORDER_DATA_REQUEST
};

export type TGetOrderDataSuccessAction = {
  readonly type: typeof GET_ORDER_DATA_SUCCESS,
  readonly orderData: TOrderDetails
};

export type TGetOrderDataFailedAction = {
  readonly type: typeof GET_ORDER_DATA_FAILED
};

///////////////////////////////////////////

export type TSetModalAction = {
  readonly type: typeof SET_MODAL,
  readonly content: TModal
};

export type TResetModalAction = {
  readonly type: typeof RESET_MODAL
};

///////////////////////////////////////////

export type TGetAllIngredientsRequestAction = {
  readonly type: typeof GET_ALL_INGREDIENTS_REQUEST
};

export type TGetAllIngredientsSuccessAction = {
  readonly type: typeof GET_ALL_INGREDIENTS_SUCCESS,
  readonly items: TIngredient[]
};

export type TGetAllIngredientsFailedAction = {
  readonly type: typeof GET_ALL_INGREDIENTS_FAILED
};

///////////////////////////////////////////

export type TRegistrationUserRequestAction = {
  readonly type: typeof REGISTRATION_USER_REQUEST
};

export type TRegistrationUserSuccessAction = {
  readonly type: typeof REGISTRATION_USER_SUCCESS,
  readonly data: IRegistrationResponse
};

export type TRegistrationUserFailedAction = {
  readonly type: typeof REGISTRATION_USER_FAILED,
  readonly err: string
};


export type TLoginUserRequestAction = {
  readonly type: typeof LOGIN_USER_REQUEST
};

export type TLoginUserSuccessAction = {
  readonly type: typeof LOGIN_USER_SUCCESS,
  readonly data: IAuthResponse
};

export type TLoginUserFailedAction = {
  readonly type: typeof LOGIN_USER_FAILED,
  readonly err: string
};


export type TLogoutUserRequestAction = {
  readonly type: typeof LOGOUT_USER_REQUEST
};

export type TLogoutUserSuccessAction = {
  readonly type: typeof LOGOUT_USER_SUCCESS,
  readonly data: IAuthOutResponse
};

export type TLogoutUserFailedAction = {
  readonly type: typeof LOGOUT_USER_FAILED,
  readonly err: string
};


export type TForgotPasswordRequestAction = {
  readonly type: typeof FORGOT_PASSWORD_REQUEST
};

export type TForgotPasswordSuccessAction = {
  readonly type: typeof FORGOT_PASSWORD_SUCCESS,
  readonly data: IPasswordForgotResetResponse
};

export type TForgotPasswordFailedAction = {
  readonly type: typeof FORGOT_PASSWORD_FAILED,
  readonly err: string
};


export type TResetPasswordRequestAction = {
  readonly type: typeof RESET_PASSWORD_REQUEST
};

export type TResetPasswordSuccessAction = {
  readonly type: typeof RESET_PASSWORD_SUCCESS,
  readonly data: IPasswordForgotResetResponse
};

export type TResetPasswordFailedAction = {
  readonly type: typeof RESET_PASSWORD_FAILED,
  readonly err: string
};


export type TGetUserDataRequestAction = {
  readonly type: typeof GET_USERDATA_REQUEST
};

export type TGetUserDataSuccessAction = {
  readonly type: typeof GET_USERDATA_SUCCESS,
  readonly data: IUserDataResponce
};

export type TGetUserDataFailedAction = {
  readonly type: typeof GET_USERDATA_FAILED,
  readonly err: string
};


export type TRefreshUserDataRequestAction = {
  readonly type: typeof REFRESH_USERDATA_REQUEST
};

export type TRefreshUserDataSuccessAction = {
  readonly type: typeof REFRESH_USERDATA_SUCCESS,
  readonly data: IUserDataResponce
};

export type TRefreshUserDataFailedAction = {
  readonly type: typeof REFRESH_USERDATA_FAILED,
  readonly err: string
};


export type TUpdateTokenRequestAction = {
  readonly type: typeof UPDATE_TOKEN_REQUEST
};

export type TUpdateTokenSuccessAction = {
  readonly type: typeof UPDATE_TOKEN_SUCCESS,
  readonly data: ITokenUpdResponse
};

export type TUpdateTokenFailedAction = {
  readonly type: typeof UPDATE_TOKEN_FAILED,
  readonly err: string
};
///////////////////////////////////////////

export type TWsConnectionSuccessAction = {
  readonly type: typeof WS_CONNECTION_SUCCESS,
  readonly payload?: string | Event
};

export type TWsConnectionErrorAction = {
  readonly type: typeof WS_CONNECTION_ERROR,
  readonly payload?: string | Event
};

export type TWsConnectionDisconnectAction = {
  readonly type: typeof WS_CONNECTION_DISCONNECT,
  readonly payload?: string | Event
};

export type TWsGetMessageAction = {
  readonly type: typeof WS_GET_MESSAGE,
  readonly payload: {
    readonly orders: IOrderDataResponse[],
    readonly total: number,
    readonly totalToday: number
  }
};

export type TWsInitConnectionAction = {
  readonly type: typeof WS_CONNECTION_OPEN,
  readonly payload?: string | Event
};

/* export type TWsInitAuthConnectionAction = {
  readonly type: typeof WS_CONNECTION_OPEN,
  readonly payload: string
}; */

export type TWsCloseConnectionAction = {
  readonly type: typeof WS_CONNECTION_CLOSE,
  readonly payload?: string | Event
};

///////////////////////////////////////////

export type TConstructorIngredientsActions = TAddBunToConstructorAction | TAddStuffingElementToConstructorAction |
  TDeleteStuffingElementFromConstructorAction | TReorderStuffingElementsAction | TConstructorCleanUpAction;

export type TGetOrderDataActions = TGetOrderDataRequestAction | TGetOrderDataSuccessAction |
  TGetOrderDataFailedAction;

export type TModalActions = TSetModalAction | TResetModalAction;

export type TGetAllIngredientsActions = TGetAllIngredientsRequestAction | TGetAllIngredientsSuccessAction | TGetAllIngredientsFailedAction;

export type TAuthActions = TRegistrationUserRequestAction | TRegistrationUserSuccessAction | TRegistrationUserFailedAction |
  TLoginUserRequestAction | TLoginUserSuccessAction | TLoginUserFailedAction | TLogoutUserRequestAction | TLogoutUserSuccessAction |
  TLogoutUserFailedAction | TForgotPasswordRequestAction | TForgotPasswordSuccessAction | TForgotPasswordFailedAction |
  TResetPasswordRequestAction | TResetPasswordSuccessAction | TResetPasswordFailedAction | TGetUserDataRequestAction |
  TGetUserDataSuccessAction | TGetUserDataFailedAction | TRefreshUserDataRequestAction | TRefreshUserDataSuccessAction |
  TRefreshUserDataFailedAction | TUpdateTokenRequestAction | TUpdateTokenSuccessAction | TUpdateTokenFailedAction;

export type TWsActions = TWsConnectionSuccessAction | TWsConnectionErrorAction | TWsConnectionDisconnectAction |
  TWsGetMessageAction | TWsInitConnectionAction | TWsCloseConnectionAction;

export type TWs_Actions = {
  wsInit: typeof WS_CONNECTION_OPEN,
  wsOnOpen: typeof WS_CONNECTION_SUCCESS,
  wsOnError: typeof WS_CONNECTION_ERROR,
  wsOnClose: typeof WS_CONNECTION_CLOSE,
  wsDisconnect: typeof WS_CONNECTION_DISCONNECT,
  wsOnMessage: typeof WS_GET_MESSAGE
};
