import { API_PATH_ORDERS } from '../utils/constants';

function getOrderData(ingredientsId) {
  return fetch(API_PATH_ORDERS, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ingredients: ingredientsId })
  })
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(`Ошибка ${res.status}`);
      }
      return res.json();
    });
};


export { getOrderData };