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
import { getCookie } from '../utils/cookie';


function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
};

export async function getOrderDataRequest(ingredientsId) {
  return await fetch(API_PATH_ORDERS, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ingredients: ingredientsId })
  })
    .then(checkResponse);
};

export async function getAllIngredientsRequest() {
  return await fetch(API_PATH_INGREDIENTS)
    .then(checkResponse);
};

export async function signUpUserRequest(email, password, name) {
  return await fetch(API_PATH_AUTH_SIGNUP, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: email, password: password, name: name })
  })
    .then(checkResponse);
};

export async function signInUserRequest(email, password) {
  return await fetch(API_PATH_AUTH_SIGNIN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: email, password: password })
  })
    .then(checkResponse);
};

export async function signOutUserRequest() {
  return await fetch(API_PATH_AUTH_SIGNOUT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ token: localStorage.getItem('refreshToken') })
  })
    .then(checkResponse);
};

export async function forgotPasswordRequest(email) {
  return await fetch(API_PATH_PASSWORD_FORGOT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: email })
  })
    .then(checkResponse);
};

export async function resetPasswordRequest(password, code) {
  return await fetch(API_PATH_PASSWORD_RESET, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password: password, token: code })
  })
    .then(checkResponse);
};

export async function getUserDataRequest() {
  return await fetch(API_PATH_AUTH_USER, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + getCookie('token')
    }
  })
    .then(checkResponse);
};

export async function refreshUserDataRequest(email, name, password) {
  return await fetch(API_PATH_AUTH_USER, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + getCookie('token')
    },
    body: JSON.stringify({ name: name, email: email, password: password })
  })
    .then(checkResponse);
};

export async function updateTokenRequest() {
  return await fetch(API_PATH_TOKEN_UPDATE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ token: localStorage.getItem('refreshToken') })
  })
    .then(checkResponse);
};
