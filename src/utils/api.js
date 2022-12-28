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
} from '../utils/constants';
import { getCookie, setCookie } from '../utils/cookie';



const checkReponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

const fetchWithRefresh = async (url, options) => {
  try {
    const res = await fetch(url, options); //делаем запрос

    return await checkReponse(res);
  } catch (err) {
    if (err.message === "jwt expired") {
      const {accessToken, refreshToken } = await updateTokenRequest(); //обновляем токены

      setCookie('token', accessToken.split('Bearer ')[1]);
      localStorage.setItem('refreshToken', refreshToken);
      console.log('Access and refresh tokens update successfully!');

      options.headers.authorization = accessToken;
      const res = await fetch(url, options); //вызываем перезапрос данных

      return await checkReponse(res);
    } else {
      return Promise.reject(err);
    }
  }
};


export async function getOrderDataRequest(ingredientsId) {
  return await fetchWithRefresh(API_PATH_ORDERS, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ingredients: ingredientsId })
  })
};

export async function getAllIngredientsRequest() {
  return await fetchWithRefresh(API_PATH_INGREDIENTS);
};

export async function signUpUserRequest(email, password, name) {
  return await fetchWithRefresh(API_PATH_AUTH_SIGNUP, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: email, password: password, name: name })
  });
};

export async function signInUserRequest(email, password) {
  return await fetchWithRefresh(API_PATH_AUTH_SIGNIN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: email, password: password })
  });
};

export async function signOutUserRequest() {
  return await fetchWithRefresh(API_PATH_AUTH_SIGNOUT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ token: localStorage.getItem('refreshToken') })
  });
};

export async function forgotPasswordRequest(email) {
  return await fetchWithRefresh(API_PATH_PASSWORD_FORGOT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: email })
  });
};

export async function resetPasswordRequest(password, code) {
  return await fetchWithRefresh(API_PATH_PASSWORD_RESET, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password: password, token: code })
  });
};

export async function getUserDataRequest() {
  return await fetchWithRefresh(API_PATH_AUTH_USER, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + getCookie('token')
    }
  });
};

export async function refreshUserDataRequest(email, name, password) {
  return await fetchWithRefresh(API_PATH_AUTH_USER, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + getCookie('token')
    },
    body: JSON.stringify({ name: name, email: email, password: password })
  });
};

export async function updateTokenRequest() {
  return await fetchWithRefresh(API_PATH_TOKEN_UPDATE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ token: localStorage.getItem('refreshToken') })
  });
};
