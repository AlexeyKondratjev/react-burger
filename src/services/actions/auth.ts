import {
  signUpUserRequest,
  signInUserRequest,
  signOutUserRequest,
  forgotPasswordRequest,
  resetPasswordRequest,
  getUserDataRequest,
  refreshUserDataRequest,
  updateTokenRequest
} from '../../utils/api';
import { AppDispatch, AppThunk } from '../types';
import {
  TRegistrationUserRequestAction, TRegistrationUserSuccessAction, TRegistrationUserFailedAction,
  TLoginUserRequestAction, TLoginUserSuccessAction, TLoginUserFailedAction,
  TLogoutUserRequestAction, TLogoutUserSuccessAction, TLogoutUserFailedAction,
  TForgotPasswordRequestAction, TForgotPasswordSuccessAction, TForgotPasswordFailedAction,
  TResetPasswordRequestAction, TResetPasswordSuccessAction, TResetPasswordFailedAction,
  TGetUserDataRequestAction, TGetUserDataSuccessAction, TGetUserDataFailedAction,
  TRefreshUserDataRequestAction, TRefreshUserDataSuccessAction, TRefreshUserDataFailedAction,
  TUpdateTokenRequestAction, TUpdateTokenSuccessAction, TUpdateTokenFailedAction
} from '../types/actions';
import { IAuthOutResponse, IAuthResponse, IPasswordForgotResetResponse, IRegistrationResponse, ITokenUpdResponse, IUserDataResponce } from '../types/data';
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
} from './action-types/auth';




export const RegistrationUserRequestAction = (): TRegistrationUserRequestAction => ({
  type: REGISTRATION_USER_REQUEST
});

export const RegistrationUserSuccessAction = (data: IRegistrationResponse): TRegistrationUserSuccessAction => ({
  type: REGISTRATION_USER_SUCCESS,
  data
});

export const RegistrationUserFailedAction = (err: string): TRegistrationUserFailedAction => ({
  type: REGISTRATION_USER_FAILED,
  err
});


export const LoginUserRequestAction = (): TLoginUserRequestAction => ({
  type: LOGIN_USER_REQUEST
});

export const LoginUserSuccessAction = (data: IAuthResponse): TLoginUserSuccessAction => ({
  type: LOGIN_USER_SUCCESS,
  data
});

export const LoginUserFailedAction = (err: string): TLoginUserFailedAction => ({
  type: LOGIN_USER_FAILED,
  err
});


export const LogoutUserRequestAction = (): TLogoutUserRequestAction => ({
  type: LOGOUT_USER_REQUEST
});

export const LogoutUserSuccessAction = (data: IAuthOutResponse): TLogoutUserSuccessAction => ({
  type: LOGOUT_USER_SUCCESS,
  data
});

export const LogoutUserFailedAction = (err: string): TLogoutUserFailedAction => ({
  type: LOGOUT_USER_FAILED,
  err
});


export const ForgotPasswordRequestAction = (): TForgotPasswordRequestAction => ({
  type: FORGOT_PASSWORD_REQUEST
});

export const ForgotPasswordSuccessAction = (data: IPasswordForgotResetResponse): TForgotPasswordSuccessAction => ({
  type: FORGOT_PASSWORD_SUCCESS,
  data
});

export const ForgotPasswordFailedAction = (err: string): TForgotPasswordFailedAction => ({
  type: FORGOT_PASSWORD_FAILED,
  err
});


export const ResetPasswordRequestAction = (): TResetPasswordRequestAction => ({
  type: RESET_PASSWORD_REQUEST
});

export const ResetPasswordSuccessAction = (data: IPasswordForgotResetResponse): TResetPasswordSuccessAction => ({
  type: RESET_PASSWORD_SUCCESS,
  data
});

export const ResetPasswordFailedAction = (err: string): TResetPasswordFailedAction => ({
  type: RESET_PASSWORD_FAILED,
  err
});


export const GetUserDataRequestAction = (): TGetUserDataRequestAction => ({
  type: GET_USERDATA_REQUEST
});

export const GetUserDataSuccessAction = (data: IUserDataResponce): TGetUserDataSuccessAction => ({
  type: GET_USERDATA_SUCCESS,
  data
});

export const GetUserDataFailedAction = (err: string): TGetUserDataFailedAction => ({
  type: GET_USERDATA_FAILED,
  err
});


export const RefreshUserDataRequestAction = (): TRefreshUserDataRequestAction => ({
  type: REFRESH_USERDATA_REQUEST
});

export const RefreshUserDataSuccessAction = (data: IUserDataResponce): TRefreshUserDataSuccessAction => ({
  type: REFRESH_USERDATA_SUCCESS,
  data
});

export const RefreshUserDataFailedAction = (err: string): TRefreshUserDataFailedAction => ({
  type: REFRESH_USERDATA_FAILED,
  err
});


export const UpdateTokenRequestAction = (): TUpdateTokenRequestAction => ({
  type: UPDATE_TOKEN_REQUEST
});

export const UpdateTokenSuccessAction = (data: ITokenUpdResponse): TUpdateTokenSuccessAction => ({
  type: UPDATE_TOKEN_SUCCESS,
  data
});

export const UpdateTokenFailedAction = (err: string): TUpdateTokenFailedAction => ({
  type: UPDATE_TOKEN_FAILED,
  err
});

////////////////////////////////////

export const registerUser: AppThunk = (email: string, password: string, name: string) => (dispatch: AppDispatch) => {
  dispatch(RegistrationUserRequestAction());

  signUpUserRequest(email, password, name)
    .then(data => dispatch(RegistrationUserSuccessAction(data)))
    .catch(err => dispatch(RegistrationUserFailedAction(err)));
};

export const loginUser: AppThunk = (email: string, password: string) => (dispatch: AppDispatch) => {
  dispatch(LoginUserRequestAction());

  signInUserRequest(email, password)
    .then(data => dispatch(LoginUserSuccessAction(data)))
    .catch(err => dispatch(LoginUserFailedAction(err)));
};

export const logoutUser: AppThunk = () => (dispatch: AppDispatch) => {
  dispatch(LogoutUserRequestAction());

  signOutUserRequest()
    .then(data => dispatch(LogoutUserSuccessAction(data)))
    .catch(err => dispatch(LogoutUserFailedAction(err)));
};

export const forgotPassword: AppThunk = (email: string) => (dispatch: AppDispatch) => {
  dispatch(ForgotPasswordRequestAction());

  forgotPasswordRequest(email)
    .then(data => dispatch(ForgotPasswordSuccessAction(data)))
    .catch(err => dispatch(ForgotPasswordFailedAction(err)));
};

export const resetPassword: AppThunk = (password: string, code: string) => (dispatch: AppDispatch) => {
  dispatch(ResetPasswordRequestAction());

  resetPasswordRequest(password, code)
    .then(data => dispatch(ResetPasswordSuccessAction(data)))
    .catch(err => dispatch(ResetPasswordFailedAction(err)));
};

export const getUserData: AppThunk = () => (dispatch: AppDispatch) => {
  dispatch(GetUserDataRequestAction());

  getUserDataRequest()
    .then(data => dispatch(GetUserDataSuccessAction(data)))
    .catch(err => dispatch(GetUserDataFailedAction(err)));
};

export const refreshUserData: AppThunk = (email: string, name: string, password: string) => (dispatch: AppDispatch) => {
  dispatch(RefreshUserDataRequestAction());

  refreshUserDataRequest(email, name, password)
    .then(data => dispatch(RefreshUserDataSuccessAction(data)))
    .catch(err => dispatch(RefreshUserDataFailedAction(err)));
};

export const updateToken: AppThunk = () => (dispatch: AppDispatch) => {
  dispatch(UpdateTokenRequestAction());

  updateTokenRequest()
    .then(data => dispatch(UpdateTokenSuccessAction(data)))
    .catch(err => dispatch(UpdateTokenFailedAction(err)));
};
