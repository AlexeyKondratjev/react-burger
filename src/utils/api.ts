import {
  API_PATH_ORDERS,
  API_PATH_INGREDIENTS,
  API_PATH_AUTH_SIGNUP,
  API_PATH_AUTH_SIGNIN,
  API_PATH_AUTH_SIGNOUT,
  API_PATH_AUTH_USER,
  API_PATH_PASSWORD_FORGOT,
  API_PATH_PASSWORD_RESET,
  API_PATH_TOKEN_UPDATE
} from './constants';
import { getCookie, setCookie } from './cookie';
import {
  IIngredientDataResponse,
  IOrderDataResponse,
  ITokenUpdResponse,
  IPasswordForgotResetResponse,
  IAuthResponse,
  IAuthOutResponse,
  IUserDataResponce,
  TOrderDetails
} from '../services/types/data';



type TOptions = {
  method?: string,
  headers: {
    'Content-Type': 'application/json',
    authorization?: string
  },
  body?: string
};

const checkReponse = <T>(res: Response): Promise<T> => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

const fetchWithRefresh = async <T>(url: string, options?: TOptions): Promise<T> => {
  try {
    const res = await fetch(url, options); //делаем запрос

    return await checkReponse(res);
  } catch (err) {
    if ((err as { message: string }).message === "jwt expired") {
      const { accessToken, refreshToken } = await updateTokenRequest(); //обновляем токены

      setCookie('token', accessToken.split('Bearer ')[1]);
      localStorage.setItem('refreshToken', refreshToken);
      console.log('Access and refresh tokens update successfully!');

      if (options) {
        options.headers.authorization = accessToken;
      }

      const res = await fetch(url, options); //вызываем перезапрос данных

      return await checkReponse(res);
    } else {
      return Promise.reject(err);
    }
  }
};


export async function getOrderDataRequest(ingredientsId: string[]) {
  return await fetchWithRefresh<TOrderDetails>(API_PATH_ORDERS, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + getCookie('token')
    },
    body: JSON.stringify({ ingredients: ingredientsId })
  })
};

export async function getAllIngredientsRequest() {
  return await fetchWithRefresh<IIngredientDataResponse>(API_PATH_INGREDIENTS);
};

export async function signUpUserRequest(email: string, password: string, name: string) {
  return await fetchWithRefresh<IAuthResponse>(API_PATH_AUTH_SIGNUP, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: email, password: password, name: name })
  });
};

export async function signInUserRequest(email: string, password: string) {
  return await fetchWithRefresh<IAuthResponse>(API_PATH_AUTH_SIGNIN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: email, password: password })
  });
};

export async function signOutUserRequest() {
  return await fetchWithRefresh<IAuthOutResponse>(API_PATH_AUTH_SIGNOUT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ token: localStorage.getItem('refreshToken') })
  });
};

export async function forgotPasswordRequest(email: string) {
  return await fetchWithRefresh<IPasswordForgotResetResponse>(API_PATH_PASSWORD_FORGOT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: email })
  });
};

export async function resetPasswordRequest(password: string, code: string) {
  return await fetchWithRefresh<IPasswordForgotResetResponse>(API_PATH_PASSWORD_RESET, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password: password, token: code })
  });
};

export async function getUserDataRequest() {
  return await fetchWithRefresh<IUserDataResponce>(API_PATH_AUTH_USER, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + getCookie('token')
    }
  });
};

export async function refreshUserDataRequest(email: string, name: string, password: string) {
  return await fetchWithRefresh<IUserDataResponce>(API_PATH_AUTH_USER, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + getCookie('token')
    },
    body: JSON.stringify({ name: name, email: email, password: password })
  });
};

export async function updateTokenRequest() {
  return await fetchWithRefresh<ITokenUpdResponse>(API_PATH_TOKEN_UPDATE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ token: localStorage.getItem('refreshToken') })
  });
};
