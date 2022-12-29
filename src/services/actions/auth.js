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

export const REGISTRATION_USER_REQUEST = 'REGISTRATION_USER_REQUEST';
export const REGISTRATION_USER_SUCCESS = 'REGISTRATION_USER_SUCCESS';
export const REGISTRATION_USER_FAILED = 'REGISTRATION_USER_FAILED';

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILED = 'LOGIN_USER_FAILED';

export const LOGOUT_USER_REQUEST = 'LOGOUT_USER_REQUEST';
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';
export const LOGOUT_USER_FAILED = 'LOGOUT_USER_FAILED';

export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAILED = 'FORGOT_PASSWORD_FAILED';

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAILED = 'RESET_PASSWORD_FAILED';

export const GET_USERDATA_REQUEST = 'GET_USERDATA_REQUEST';
export const GET_USERDATA_SUCCESS = 'GET_USERDATA_SUCCESS';
export const GET_USERDATA_FAILED = 'GET_USERDATA_FAILED';

export const REFRESH_USERDATA_REQUEST = 'REFRESH_USERDATA_REQUEST';
export const REFRESH_USERDATA_SUCCESS = 'REFRESH_USERDATA_SUCCESS';
export const REFRESH_USERDATA_FAILED = 'REFRESH_USERDATA_FAILED';

export const UPDATE_TOKEN_REQUEST = 'UPDATE_TOKEN_REQUEST';
export const UPDATE_TOKEN_SUCCESS = 'UPDATE_TOKEN_SUCCESS';
export const UPDATE_TOKEN_FAILED = 'UPDATE_TOKEN_FAILED';

export function registerUser(email, password, name) {
  return function (dispatch) {
    dispatch({ type: REGISTRATION_USER_REQUEST });

    signUpUserRequest(email, password, name)
      .then(data => dispatch({ type: REGISTRATION_USER_SUCCESS, payload: data }))
      .catch(err => dispatch({ type: REGISTRATION_USER_FAILED, payload: err }));
  }
};

export function loginUser(email, password) {
  return function (dispatch) {
    dispatch({ type: LOGIN_USER_REQUEST });

    signInUserRequest(email, password)
      .then(data => dispatch({ type: LOGIN_USER_SUCCESS, payload: data }))
      .catch(err => dispatch({ type: LOGIN_USER_FAILED, payload: err }));
  }
};

export function logoutUser() {
  return function (dispatch) {
    dispatch({ type: LOGOUT_USER_REQUEST });

    signOutUserRequest()
      .then(data => dispatch({ type: LOGOUT_USER_SUCCESS, payload: data }))
      .catch(err => dispatch({ type: LOGOUT_USER_FAILED, payload: err }));
  }
};

export function forgotPassword(email) {
  return function (dispatch) {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });

    forgotPasswordRequest(email)
      .then(data => dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: data }))
      .catch(err => dispatch({ type: FORGOT_PASSWORD_FAILED, payload: err }));
  }
};

export function resetPassword(password, code) {
  return function (dispatch) {
    dispatch({ type: RESET_PASSWORD_REQUEST });

    resetPasswordRequest(password, code)
      .then(data => dispatch({ type: RESET_PASSWORD_SUCCESS, payload: data }))
      .catch(err => dispatch({ type: RESET_PASSWORD_FAILED, payload: err }));
  }
};

export function getUserData() {
  return function (dispatch) {
    dispatch({ type: GET_USERDATA_REQUEST });

    getUserDataRequest()
      .then(data => dispatch({ type: GET_USERDATA_SUCCESS, payload: data }))
      .catch(err => dispatch({ type: GET_USERDATA_FAILED, payload: err }));
  }
};

export function refreshUserData(email, name, password) {
  return function (dispatch) {
    dispatch({ type: REFRESH_USERDATA_REQUEST });

    refreshUserDataRequest(email, name, password)
      .then(data => dispatch({ type: REFRESH_USERDATA_SUCCESS, payload: data }))
      .catch(err => dispatch({ type: REFRESH_USERDATA_FAILED, payload: err }));
  }
};

export function updateToken() {
  return function (dispatch) {
    dispatch({ type: UPDATE_TOKEN_REQUEST });

    updateTokenRequest()
      .then(data => dispatch({ type: UPDATE_TOKEN_SUCCESS, payload: data }))
      .catch(err => dispatch({ type: UPDATE_TOKEN_FAILED, payload: err }));
  }
};
