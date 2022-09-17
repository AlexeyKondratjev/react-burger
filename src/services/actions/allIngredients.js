import { getAllIngredientsRequest } from '../../utils/api';

export const GET_ALL_INGREDIENTS_REQUEST = 'GET_ALL_INGREDIENTS_REQUEST';
export const GET_ALL_INGREDIENTS_SUCCESS = 'GET_ALL_INGREDIENTS_SUCCESS';
export const GET_ALL_INGREDIENTS_FAILED = 'GET_ALL_INGREDIENTS_FAILED';


export function getAllIngredients() {
  return function (dispatch) {
    dispatch({ type: GET_ALL_INGREDIENTS_REQUEST });

    getAllIngredientsRequest().then(res => {
      if (res && res.success) {
        dispatch({
          type: GET_ALL_INGREDIENTS_SUCCESS,
          items: res.data
        });
      } else {
        dispatch({ type: GET_ALL_INGREDIENTS_FAILED });
      }
    });
  };
}
