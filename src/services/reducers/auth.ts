import {
  REGISTRATION_USER_REQUEST,
  REGISTRATION_USER_SUCCESS,
  REGISTRATION_USER_FAILED,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILED,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILED,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
  GET_USERDATA_REQUEST,
  GET_USERDATA_SUCCESS,
  GET_USERDATA_FAILED,
  REFRESH_USERDATA_REQUEST,
  REFRESH_USERDATA_SUCCESS,
  REFRESH_USERDATA_FAILED,
  UPDATE_TOKEN_REQUEST,
  UPDATE_TOKEN_SUCCESS,
  UPDATE_TOKEN_FAILED
} from '../actions/action-types/auth';
import { setCookie, deleteCookie } from '../../utils/cookie';
import { TAuthActions } from '../types/actions';
import { TUser } from '../types/data';



export type TAuthState = {
  user: TUser | null,
  registrationRequest: boolean,
  registrationFailed: boolean,
  registrationFailedMessage: string,
  loginRequest: boolean,
  loginFailed: boolean,
  loginFailedMessage: string,
  logoutRequest: boolean,
  logoutFailed: boolean,
  logoutFailedMessage: string,
  forgotPasswordRequest: boolean,
  forgotPasswordFailed: boolean,
  forgotPasswordMessage: string,
  resetPasswordRequest: boolean,
  resetPasswordFailed: boolean,
  resetPasswordMessage: string,
  getUserDataRequest: boolean,
  getUserDataFailed: boolean,
  getUserDataMessage: string
  refreshUserDataRequest: boolean,
  refreshUserDataFailed: boolean,
  refreshUserDataMessage: string,
  updateTokenRequest: boolean,
  updateTokenFailed: boolean,
  updateTokenMessage: string,
  isPasswordRecoveryEmailReceived: boolean,
  isResetPasswordSuccess: boolean
}

const initialState: TAuthState = {
  user: null,
  registrationRequest: false,
  registrationFailed: false,
  registrationFailedMessage: '',
  loginRequest: false,
  loginFailed: false,
  loginFailedMessage: '',
  logoutRequest: false,
  logoutFailed: false,
  logoutFailedMessage: '',
  forgotPasswordRequest: false,
  forgotPasswordFailed: false,
  forgotPasswordMessage: '',
  resetPasswordRequest: false,
  resetPasswordFailed: false,
  resetPasswordMessage: '',
  getUserDataRequest: false,
  getUserDataFailed: false,
  getUserDataMessage: '',
  refreshUserDataRequest: false,
  refreshUserDataFailed: false,
  refreshUserDataMessage: '',
  updateTokenRequest: false,
  updateTokenFailed: false,
  updateTokenMessage: '',
  isPasswordRecoveryEmailReceived: false,
  isResetPasswordSuccess: false
};



export const authReducer = (state = initialState, action: TAuthActions): TAuthState => {
  switch (action.type) {
    case REGISTRATION_USER_REQUEST: {
      return {
        ...state,
        registrationRequest: true
      }
    }
    case REGISTRATION_USER_SUCCESS: {
      const { user, accessToken, refreshToken } = action.data;

      setCookie('token', accessToken.split('Bearer ')[1]);
      localStorage.setItem('refreshToken', refreshToken);
      console.log('Registration success!');

      return {
        ...state,
        registrationRequest: false,
        registrationFailed: false,
        registrationFailedMessage: '',
        user: user
      }
    }
    case REGISTRATION_USER_FAILED: {
      return {
        ...state,
        registrationRequest: false,
        registrationFailed: true,
        registrationFailedMessage: action.err
      }
    }
    case LOGIN_USER_REQUEST: {
      return {
        ...state,
        loginRequest: true
      }
    }
    case LOGIN_USER_SUCCESS: {
      const { user, accessToken, refreshToken } = action.data;

      setCookie('token', accessToken.split('Bearer ')[1]);
      localStorage.setItem('refreshToken', refreshToken);
      console.log('Login success!');

      return {
        ...state,
        loginRequest: false,
        loginFailed: false,
        loginFailedMessage: '',
        user: user
      }
    }
    case LOGIN_USER_FAILED: {
      return {
        ...state,
        loginRequest: false,
        loginFailed: true,
        loginFailedMessage: action.err
      }
    }
    case LOGOUT_USER_REQUEST: {
      return {
        ...state,
        logoutRequest: true
      }
    }
    case LOGOUT_USER_SUCCESS: {
      deleteCookie('token');
      localStorage.removeItem('refreshToken');
      console.log('Logout success!');

      return {
        ...state,
        logoutRequest: false,
        logoutFailed: false,
        logoutFailedMessage: '',
        user: initialState.user
      }
    }
    case LOGOUT_USER_FAILED: {
      return {
        ...state,
        logoutRequest: false,
        logoutFailed: true,
        logoutFailedMessage: action.err
      }
    }
    case FORGOT_PASSWORD_REQUEST: {
      return {
        ...state,
        forgotPasswordRequest: true
      }
    }
    case FORGOT_PASSWORD_SUCCESS: {
      const { message } = action.data;
      console.log('Password recovery sucess : ', message);

      return {
        ...state,
        forgotPasswordRequest: false,
        forgotPasswordFailed: false,
        forgotPasswordMessage: message,
        isPasswordRecoveryEmailReceived: true
      }
    }
    case FORGOT_PASSWORD_FAILED: {
      return {
        ...state,
        forgotPasswordRequest: false,
        forgotPasswordFailed: true,
        forgotPasswordMessage: action.err
      }
    }
    case RESET_PASSWORD_REQUEST: {
      return {
        ...state,
        resetPasswordRequest: true
      }
    }
    case RESET_PASSWORD_SUCCESS: {
      const { message } = action.data;
      console.log('Password reset sucess : ', message);

      return {
        ...state,
        resetPasswordRequest: false,
        resetPasswordFailed: false,
        resetPasswordMessage: message,
        isPasswordRecoveryEmailReceived: false,
        isResetPasswordSuccess: true
      }
    }
    case RESET_PASSWORD_FAILED: {
      return {
        ...state,
        resetPasswordRequest: false,
        resetPasswordFailed: true,
        resetPasswordMessage: action.err
      }
    }
    case GET_USERDATA_REQUEST: {
      return {
        ...state,
        getUserDataRequest: true
      }
    }
    case GET_USERDATA_SUCCESS: {
      const { user } = action.data;
      console.log('User data received successfully!');

      return {
        ...state,
        getUserDataRequest: false,
        getUserDataFailed: false,
        getUserDataMessage: '',
        user: user
      }
    }
    case GET_USERDATA_FAILED: {
      return {
        ...state,
        getUserDataRequest: false,
        getUserDataFailed: true,
        getUserDataMessage: action.err
      }
    }
    case REFRESH_USERDATA_REQUEST: {
      return {
        ...state,
        refreshUserDataRequest: true
      }
    }
    case REFRESH_USERDATA_SUCCESS: {
      const { user } = action.data;
      console.log('User data refreshed successfully!');

      return {
        ...state,
        refreshUserDataRequest: false,
        refreshUserDataFailed: false,
        refreshUserDataMessage: '',
        user: user
      }
    }
    case REFRESH_USERDATA_FAILED: {
      return {
        ...state,
        refreshUserDataRequest: false,
        refreshUserDataFailed: true,
        refreshUserDataMessage: action.err
      }
    }
    case UPDATE_TOKEN_REQUEST: {
      return {
        ...state,
        updateTokenRequest: true
      }
    }
    case UPDATE_TOKEN_SUCCESS: {
      const { accessToken, refreshToken } = action.data;

      setCookie('token', accessToken.split('Bearer ')[1]);
      localStorage.setItem('refreshToken', refreshToken);
      console.log('Access and refresh tokens update successfully!');

      return {
        ...state,
        updateTokenRequest: false,
        updateTokenFailed: false,
        updateTokenMessage: ''
      }
    }
    case UPDATE_TOKEN_FAILED: {
      return {
        ...state,
        updateTokenRequest: false,
        updateTokenFailed: true,
        updateTokenMessage: action.err
      }
    }
    default: {
      return state;
    }
  };
};
